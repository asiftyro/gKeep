# An A-B-C to Electron App making (when you hate to use Google Keep inside browser tab).


###Requirement:

 - Node.JS
 - Terminal

##Yada yada yada:

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

	