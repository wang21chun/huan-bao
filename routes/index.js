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
    let form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        let inPaths = [];
        let outPaths = [];
        for (let i = 0, length = files.file.length; i < length; i++) {
            let name = files.file[i].originalFilename;
            let readPath = files.file[i].path;
            let writePath = path.join(basePath, name);
            inPaths.push(readPath);
            outPaths.push(writePath);
        }
        fileUtil.copyFile(inPaths,outPaths)
        .then(()=>res.json(outPaths),err=>{});

    });
});

module.exports = router;
