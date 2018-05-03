const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const windowStateKeeper = require('electron-window-state');
const Menu = electron.Menu;

let mainWindow = null;

const menuTemplate = [{
  label: "gKeep",
  submenu: [{
    label: "Quit", accelerator: "Command+Q", click: function () {
      app.quit();
    }
  }]
}, {
  label: "Edit",
  submenu: [
    { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
    { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
    { type: "separator" },
    { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
    { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
    { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
    { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
  ]
}];

app.on('ready', function () {
  // Get display monitor/screen size
  let monitorScreenSize = electron.screen.getPrimaryDisplay().size;

  // Load the previous state with fallback to default(sized down to 80% of display monitor/screen size)
  let mainWindowState = windowStateKeeper({
    defaultWidth: monitorScreenSize.width * .8,
    defaultHeight: monitorScreenSize.height * .8,
  });

  // Create a window using the state information
  mainWindow = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height
  });

  // Register listeners for window size, position change logging
  mainWindowState.manage(mainWindow);

  // Load google keep from URL in the above window
  mainWindow.loadURL('https://keep.google.com');

  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));

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
