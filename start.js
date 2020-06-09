const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
	let win = new BrowserWindow({
		width: 800,
    	height: 600,
		title: 'Editor',
		frame:true,
		transparent:true,
		webPreferences: {
			nodeIntegration: true
		}
	});
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'public/index.html'),
		protocol: 'file:',
		slashes: true
	}));
}

app.on('ready', function () {
    setTimeout(function() {
        createWindow();
    }, 300);
});