const fs = require('fs');
const path = require('path');
const Promise = require('promise');
module.exports = {
    readFile: function(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
        });
    },
    writeFile: function(path, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },
    copyFile:function(inPaths,outPaths){
        return new Promise((resolve, reject) => {
            for (let i = 0, length = inPaths.length; i < length; i++) {
                let readPath = inPaths[i];
                let writePath = outPaths[i];
                this.readFile(readPath)
                .then(data => this.writeFile(writePath, data), err => reject(err))
                .then(() => resolve(), err => reject(err));
            }
        });
    }
}
