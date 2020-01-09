const { app, BrowserWindow } = require('electron');
require('v8-compile-cache');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    width: 800
  });

  // Load the index.html of the app.
  win.loadFile('./dist/index.html');

  // DevTools within Chromium front-end
  win.webContents.openDevTools();
}

app.on('ready', createWindow);
