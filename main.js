const { app, BrowserWindow, ipcMain } = require("electron");
const fetch = require("node-fetch");
const path = require("path");
const installer = require("./installer");
installer.install(app);
installer.update();

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js"),
        },
    });

    ipcMain.on("set-keyword", (event, keyword) => {
        const API_KEY = "AIzaSyA707o0YiEIvAY_Jk9tT59Bbd25233D0w8";
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                event.sender.send("keyword-data", data);
                console.log(data);
            })
            .catch((error) => {
                event.sender.send("keyword-data-error", error);
            });
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
    win.maximize();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})

<<
<<
<< < HEAD




    ===
    ===
    = >>>
    >>>
    > f955f18032b654055070dc36d9636c800cbc39d3


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});