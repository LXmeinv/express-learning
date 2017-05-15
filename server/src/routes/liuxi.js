/**
 * Created by zhongzhengkai on 2017/5/12.
 */


var router = require('express').Router();
module.exports = router;
var g = require('../core/gateway');
var liuxi = require('../controller/test/liuxi');
var liuxi2 = require('../controller/test/liuxi2');

router.get('/liuxi',g.use(liuxi));

router.get('/red',g.use(liuxi2.red));
router.get('/blue',g.use(liuxi2.blue));
router.get('/yellow',g.use(liuxi2.yellow));