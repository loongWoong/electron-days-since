const { ipcRenderer } = require('electron');

ipcRenderer.on('python-output', (event, output) => {
  const days = output.trim(); // Remove whitespace
  document.getElementById('days-since').innerText = days;
});

ipcRenderer.on('python-error', (event, error) => {
  document.getElementById('days-since').innerText = `Error: ${error}`;
});
