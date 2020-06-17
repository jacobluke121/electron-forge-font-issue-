const {app, BrowserWindow} = require('electron');
const electronLog = require('electron-log');

const main_log = electronLog.create('main')
//set console.log to main_log.log,
console.log = main_log.log;


let mainWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
	app.quit();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', (event) => {
	event.preventDefault();
	mainWindow = new BrowserWindow({
									   width: 1280, height: 960,
									   webPreferences: {
										   nodeIntegration: false,
										   webSecurity: false,
										   contextIsolation: true,
										   enableRemoteModule: false,
										   preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
									   }
								   });

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);


	mainWindow.webContents.openDevTools();


	// if closed then end application:
	mainWindow.on('closed', function () {
		main_log.info('%c Closing. %c The application', 'color: red', 'color: green');
		mainWindow = null;
	});
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On Mac OS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {

		mainWindow = new BrowserWindow({
										   width: 1280,
										   height: 960,
									   });
		mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
	}
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
