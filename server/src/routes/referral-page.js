/**
 * Created by zhongzhengkai on 2017/5/4.
 */

var router = require('express').Router();
module.exports = router;
var g = require('../core/gateway');
var login = require('../controller/referral-page/login');

var home =require('../controller/referral-page/home');

router.get('/login',g.use(login.GET));

router.get('/',g.use(home.GET));

router.get('/home',g.use(home.GET));
router.get('/classify',g.use(home.CLASSIFY));
router.get('/data',g.use(home.YUE));
router.get('/shopcar',g.use(home.SCAR));
router.get('/mine',g.use(home.MY));