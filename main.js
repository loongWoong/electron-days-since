const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');

let mainWindow;
let updateInterval;


function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('index.html');

  //Initial call to the python script
  updateDisplay();

  //Start interval to update the display every 10 minutes (600,000 milliseconds)
  updateInterval = setInterval(updateDisplay, 600000);


  mainWindow.on('closed', () => {
    clearInterval(updateInterval); // Stop interval when window closes
    mainWindow = null;
  });
}

function updateDisplay() {
    exec('python days_since.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      mainWindow.webContents.send('python-error', error.message);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      mainWindow.webContents.send('python-error', stderr);
      return;
    }
    mainWindow.webContents.send('python-output', stdout);
  });
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
