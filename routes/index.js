"use strict";
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const automated = require('../src/service/search/automated.js');
const goodsSearch = require('../src/service/search/goods.js');

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

module.exports = router;
