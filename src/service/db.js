const MongoClient = require('mongodb').MongoClient;
const Promise = require('promise');
const dbConfig = require('../../db.config.json');
const path = require('path');
let mongoDB;

class DB {
    synMongodb() {
        return new Promise((resolve, reject) => {
            let url = getMongodbUrl();
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

const getMongodbUrl = () =>{
    //'mongodb://192.168.1.25:27017/test';
    let mongodb = dbConfig.mongodb;
    let url = ['mongodb://'];
    url.push(mongodb.ip);
    url.push(":" + mongodb.port || '27017');
    url.push('/' + mongodb.database);
    return url.join("");
};
module.exports = new DB();
