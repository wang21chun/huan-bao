"use strict";
const DB = require('../db.js');
const Promise = require('promise');
const KEYWORD_COLLECTION = 'keyword';
class Automated {
    likeKeywords(keyword) {
        return new Promise((resolve, reject) => {
            DB.synMongodb().then((db) => {
                let keywordCollection = db.collection(KEYWORD_COLLECTION);
                let reg = new RegExp(keyword, 'igm');
                keywordCollection.find({
                    key: {
                        $regex: reg
                    }
                }).sort({
                    number: -1
                }).toArray((err, docs) => {
                    if (err) reject(err);
                    else resolve(docs);
                });
            }, (err) => {
                console.error(err);
                reject(err);
            });
        });
    }
    querykeyword(keyword) {
        return new Promise((resolve, reject) => {
            DB.synMongodb().then((db) => {
                let keywordCollection = db.collection(KEYWORD_COLLECTION);
                keyword = keyword.toLowerCase();
                let doc = keywordCollection.findOne({
                    key: keyword
                });
                resolve(doc);
            }, (err) => {
                reject(err);
            });
        });

    }
    addKeyword(keyword) {
        DB.synMongodb().then((db) => {
            let keywordCollection = db.collection(KEYWORD_COLLECTION);
            try {
                keywordCollection.insertOne({
                    key: keyword.toLowerCase(),
                    number: 1
                });
            } catch (err) {
                return Promise.reject(err);
            }

        }, (err) => {
            return Promise.reject(err);
        });
    }
    upKeywordNumber(doc) {
        DB.synMongodb().then((db) => {
            let keywordCollection = db.collection(KEYWORD_COLLECTION);
            ++doc.number;
            try {
                keywordCollection.updateOne({
                    _id: doc._id
                }, doc, {
                    upsert: true
                });
            } catch (err) {
                return Promise.reject(err);
            }

        }, (err) => {
            return Promise.reject(err);
        });
    }
}

module.exports = new Automated();
