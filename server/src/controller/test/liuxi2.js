/**
 * Created by zhongzhengkai on 2017/5/12.
 */


exports.red = function *(req, body, query){
  req.res.send('<h1 style="color:red">red</h1>');
};

exports.blue = function *(req, body, query){
  req.res.send('<h1 style="color:blue">blue</h1>');
};

exports.yellow=function *(req,body,query){
  req.res.send('<h1 style="color: greenyellow;">生机盎然</h1>')
}