electron-days-since

一个简单易用的桌面应用程序，用于统计从 2017 年 7 月 16 日到现在的天数，以及转换为年、月、日的格式。该应用程序结合了 Python 的日期计算能力和 Electron 的跨平台桌面应用开发能力，提供了直观的用户界面。
--背景

在生活中，我们常常需要计算某个特定日期距离现在已经过去了多少天。为了满足这个需求，我开发了 electron-days-since。该程序利用 Python 脚本进行日期计算，并通过 Electron 封装成一个用户友好的桌面应用程序，方便用户随时查看日期差异。
--功能

    计算并显示从 2017 年 7 月 16 日到当前日期的总天数。
    将天数转换为年、月、日的格式，便于用户理解。
    提供简单直观的用户界面，易于操作。
    支持 Windows 平台的 .exe 打包，方便用户直接运行。

--技术栈

    Python：用于日期计算和逻辑处理。
    Electron：用于构建跨平台桌面应用程序。
    Node.js：基于v18.20.4开发，作为 Electron 的运行时环境。
	yarn：基于v1.22.22开发，作为运行项目及构建exe文件

--安装与使用
1、安装exe
    下载最新的 release。
    解压缩并运行 days_since.exe。
    查看从 2017 年 7 月 16 日到现在的天数统计。
2、源码构建
2.1 运行
yarn start 或者 npm start
2.2 构建exe安装包
yarn run build 或者 npm run build
--特殊说明：
yarn run build时出现⨯ Get "https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z": 报错，所以本地下载后配置到了electron-builder.yml中，可以根据自己的实际路径修改G:\toos\winCodeSign-2.6.0
--贡献
欢迎任何形式的贡献！如果你有建议或发现了 bug，请提交 issue 或者直接发起 pull request。
--许可证
该项目采用 Apache-2.0 许可证，详情请查看 LICENSE 文件。
