import app from 'app'
import BrowserWindow from 'browser-window'
import { ipcMain } from 'electron'

let auth, rtc

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
        app.quit()
});

app.on('ready', () => {
    auth = new BrowserWindow({ width: 1280, height: 720 })
    auth.loadURL('file://' + __dirname + '/../../public/auth.html')
    auth.openDevTools()
    auth.on('closed', () => {
        auth = null
    })
})

ipcMain.on('success-login', (event, args) => {
    auth.close()
    rtc = new BrowserWindow({ width: 1280, height: 720 })
    rtc.loadURL('file://' + __dirname + '/../../public/app.html')
    rtc.openDevTools()
    rtc.on('closed', () => {
        rtc = null
    })
})

