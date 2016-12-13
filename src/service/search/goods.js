"use strict";
const DB = require('../db.js');
const Promise = require('promise');
const GOODS_COLLECTION = 'goods';

class GoodsSearch{
	queryList(keyword) {
        return new Promise((resolve, reject) => {
            DB.synMongodb().then((db) => {
                let goodsCollection = db.collection(GOODS_COLLECTION);
                let reg = new RegExp(keyword, 'igm');
                goodsCollection.find({
                    name: {
                        $regex: reg
                    }
                }).sort({
                    name: 1
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
}

module.exports = new GoodsSearch();