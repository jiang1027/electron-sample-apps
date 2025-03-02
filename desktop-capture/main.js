const { app, BrowserWindow, ipcMain, desktopCapturer, } = require('electron');
const path = require('path');

let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin')
    app.quit();
});

app.setPath("userData", __dirname + "/saved_recordings");

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    }
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

ipcMain.handle('get-sources', async (event, options) => {
  return await desktopCapturer.getSources(options);
});


