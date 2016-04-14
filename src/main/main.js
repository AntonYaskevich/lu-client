import app from 'app'
import BrowserWindow from 'browser-window'
import { ipcMain } from 'electron'

let appWindow

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
        app.quit()
});

app.on('ready', () => {
    appWindow = new BrowserWindow({ width: 1280, height: 720 })
    appWindow.loadURL('file://' + __dirname + '/../../public/app.html')
    appWindow.openDevTools()
    appWindow.on('closed', () => {
        appWindow = null
    })
})

