/**
 * Created by zhongzhengkai on 2017/5/4.
 */
var router = require('express').Router();
module.exports = router;
var g = require('../core/gateway');
var testCtrl = require('../controller/test/ctrl');

// GET /test/page1
router.get('/page1', g.use(testCtrl.getPage1));

router.get('/page2', g.use(testCtrl.getPage2));

router.get('/page3', g.use(testCtrl.getPage3));

router.post('/commit-cmd', g.use(testCtrl.postPage1));

router.post('/page1', g.use(testCtrl.postPage3));
