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
    }
}
