/**
 * Created by zhongzhengkai on 2017/5/4.
 */

var g = require('../../core/gateway');
var cf = require('../../core/common-func');
var env = require('../../../config/env/project');

var booksUrl = 'http://www.zzkai.com:8888/getbooks';

exports.getPage1 = function *(req, body ,query) {

  var {list1, list2, list3} = yield {
    list1: cf.get(booksUrl),
    list2: cf.get(booksUrl),
    list3: cf.get(booksUrl)
  };

  // var [list1, list2, list3] = yield [
  //   cf.get(booksUrl),
  //   cf.get(booksUrl),
  //   cf.get(booksUrl)
  // ];

  // var list1 = yield cf.get(booksUrl);
  // var list2 = yield cf.get(booksUrl);
  // var list3 = yield cf.get(booksUrl);

  var list = list1.concat(list2).concat(list3);

  return g.view('page1', {name: 'zzk', age: 22, list, uid:'yyy'});
};

exports.getPage2 = function *(req, body ,query) {
  return g.view('page2');
};

exports.getPage3 = function *(req, body ,query) {
  return g.view('page3');
};

exports.postPage1 = function *(req, body, query) {
  var cmd = body.cmd;
  if (cmd == 1) {
    var list = [
      {bookName:'未来世界222',author:'zzk'},
      {bookName:'大彪洋222',author:'yujie'},
      {bookName:'黑客的幻想222',author:'adam'}
    ];
    // {layout:false, helpers:{LiuXi:()=> '<h1>I am Liu Xi</h1>'}}
    return g.view('page1',
      {name: 'your cmd is:' + cmd + ' ' + Date.now(), age: 22, list, cmd}
    );
  } else if (cmd == 2) {
    return g.json({name: 'your cmd is:' + cmd, age: 22});
  } else if (cmd == 3) {
    return g.redirect('page2');
  } else if (cmd == 4) {
    return g.file(env.WWW_FILE_PATH + '/hello.txt');
  } else {
    return g.json({errMessage: 'cmd is invalid'});
  }
};

exports.postPage3=function *(req,body,query){

}



