const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('capturer', {
    getSources: (options) => {
        return ipcRenderer.invoke('get-sources', options);
    },
});

