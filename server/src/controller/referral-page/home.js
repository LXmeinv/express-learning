/**
 * Created by zhongzhengkai on 2017/6/2.
 */


var g = require('../../core/gateway');
var cf = require('../../core/common-func');

exports.GET = function *(req, body, query){
  return g.view('daling/home',{title:'home'},{layout:'default.html'});
};
exports.CLASSIFY = function *(req, body, query){
  return g.view('daling/classify',{title:'classify'},{layout:'default.html'});
};
exports.YUE = function *(req, body, query){
  return g.view('daling/data',{title:'data'},{layout:'default.html'});
};
exports.SCAR = function *(req, body, query){
  return g.view('daling/shopcar',{title:'shopcar'},{layout:'default.html'});
};
exports.MY = function *(req, body, query){
  return g.view('daling/mine',{title:'mine'},{layout:'default.html'});
};

exports.POST = function *(req, body, query){
  g.view('login');
};
