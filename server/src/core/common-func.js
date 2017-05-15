/**
 * Created by zhongzhengkai on 2017/5/4.
 */

var http = require('http');
var https = require('https');
var url = require('url');


exports.post = (url, body)=> {
  return (cb)=> {
    exports.request(url, {body: body, method: 'post', json: true}, cb);
  }
};

exports.get = (url)=>{
  return (cb)=>{
    exports.request(url, {method: 'get', json: true}, cb);
  }
};

exports.request = (urlStr, options, cb)=> {
  console.log(urlStr);
  var parsedUrl = url.parse(urlStr);
  var httpMgr = http;
  if(parsedUrl.protocol == 'https:')httpMgr = https;

  var bodyStr = options.body ? JSON.stringify(options.body): '';
  if (options.method == 'post'){
    parsedUrl.method = 'post';
    parsedUrl.headers = {'Content-Type':'application/json','Content-Encoding':'utf-8','Content-Length': Buffer.byteLength(bodyStr,'utf-8')};
  }
  var req = httpMgr.request(parsedUrl,(res)=>{
    var bufferList=[];
    res.on('data',(chunk)=>{bufferList.push(chunk)});
    res.on('end', ()=> {
      var data = Buffer.concat(bufferList);
      console.log('data is:',data.toString());
      if (options.json) {
        var toReturn = '';
        try {
          toReturn = JSON.parse(data);
          cb(null, toReturn);
        } catch (err) {
          cb(null, data);
        }
      } else cb(null, data)
    });
    res.on('error',(err)=>cb(err));
  });
  if(options.body)req.write(bodyStr);
  req.end();
};

exports.getAppEnv = ()=>{
  var defaultEnv = require('../../config/default-env');
  return process.env.APP_ENV || defaultEnv || 'dev';
};