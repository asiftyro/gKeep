const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', function () {
  // Get display monitor/screen size
  let monitorScreenSize = electron.screen.getPrimaryDisplay().size;

  // Create a window sized down to 80% of display monitor/screen size
  mainWindow = new BrowserWindow({
    'width': monitorScreenSize.width * .8,
    'height': monitorScreenSize.height * .8
  });

  // Load google keep from URL in the above window
  mainWindow.loadURL('https://keep.google.com');

  // Destroy windown when closed
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

// Quit App when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});