const { contextBridge, ipcRenderer, ipcMain } = require("electron");
contextBridge.exposeInMainWorld("Bridge", {
  setKeyword: (keyword) => ipcRenderer.send("set-keyword", keyword),
  KeyWordData: (data) => ipcRenderer.on("keyword-data", data),
});
