# An A-B-C to Electron App making (when you hate to use Google Keep inside browser tab).


## Requirement:

 - Node.JS
 - Terminal

## Yada yada yada:

1. Make a repo in Github named gKeep (without README).
2. In Terminal -
	1. Create project dir and cd into it.
	
	    ```
	    > mkdir gKeep && cd gKeep
	    ```

	2. Initialize npm project.

		```
		> npm init
		```

	    ```
	    package name: (gkeep)
	    version: (1.0.0)
	    description: Gooogle Keep, wrapped as an electron app.
	    entry point: (index.js) 
	    test command:
	    git repository: https://github.com/gihub_user_name/gKeep.git
	    keywords: Google Keep Electron App
	    author: your_name
	    license: (ISC)
	    ```

		Update `package.json` created by npm project initialization.
		
      ```javascript
      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "electron ."
      }
      ```

	3. Install Electron library as dev-dependenct
	
		```
		npm i -D electron
		```
    
    4. Create README

	    ```
	    > touch README.md
	    ```
	

	
	5. Initialize local git repo.
	
	    ```
	    > git init
	    > git add .
	    > git commit -m "project initiated"
	    ```

	5.  Push to Github repo.

	    ```
	    > git remote add origin https://github.com/gihub_user_name/gKeep.git
	    > git push -u origin master
	    ```

	6. Create index.js
		
		```
		> touch index.js
		```
		
		`index.js:`

		```javascript
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
	```    	