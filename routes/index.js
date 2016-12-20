"use strict";
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const automated = require('../src/service/search/automated.js');
const goodsSearch = require('../src/service/search/goods.js');
const basePath = path.join(process.cwd(), "public/images/");
const multiparty = require('multiparty');
const fileUtil = require('../src/service/fileUtil.js');


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/list', (req, res, next) => {
    let k = req.query.v.toLowerCase();

    goodsSearch.queryList(k).then((result) => {
        res.json(result);
    }, (err) => {
        console.log(err);
    });


    automated.querykeyword(k).then((result) => {
        if (_.isEmpty(result)) {
            automated.addKeyword(k);
        } else {
            automated.upKeywordNumber(result);
        }
    }, (err) => {
        console.error(err);
    });

});

router.get('/automatedSearch', (req, res, next) => {
    let k = req.query.keyword.toLowerCase();
    automated.likeKeywords(k).then((results) => {
        res.json(results);
    }, (err) => {
        res.json([]);
    });
});

router.post('/upload', (req, res, next) => {
    var form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        let name = files.file[0].originalFilename;
        let readPath = files.file[0].path;
        let writePath = path.join(basePath, name);
        fileUtil.readFile(readPath)
            .then(data => fileUtil.writeFile(writePath, data), err => {
                console.log(err);
            })
            .then(() => res.json(writePath), err => {
                console.log(err);
            });
    });


});

module.exports = router;
