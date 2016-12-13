const MongoClient = require('mongodb').MongoClient;
const Promise = require('promise');
const url = 'mongodb://192.168.1.25:27017/test';
let mongoDB;

class DB {
    synMongodb() {
        return new Promise((resolve, reject) => {
            if (undefined === mongoDB) {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        db.close();
                        reject(err);
                    } else {
                        mongoDB = db;
                        resolve(mongoDB);
                    }
                });
            } else {
                resolve(mongoDB);
            }

        });
    }
}
module.exports = new DB();
