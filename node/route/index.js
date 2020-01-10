var uuid = require('uuid');
var ope = require('../db/index');
var sql = require('../db/operate');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var app = express();


app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser)

// 登录函数
router.post('/enter',function(req,res){
  console.log('进入路由')
  var name = req.body.name
  var password = req.body.password
   ope.sql(sql.judgeName(name)).then(result1=>{
      if(result1){
        return ope.sql(sql.judgePassword(name,password))
      }
      res.status(200).json({message:'账号错误',type:1})
      return 'notEnter'
  }).then(result2=>{
    if(result2!=='notEnter'){
      if(result2){
        return res.status(200).json({message:'登陆成功',type:3})
      }
       res.status(200).json({message:'密码错误',type:2})
    }
  })
})


//注册函数
router.post('/login',function(req,res){
  var id = uuid.v4().slice(0,7)
  var name = req.body.name
  var password = req.body.password
  ope.insertsql(sql.addUser,[id,name,password])
  res.status(200).json({message:'注册成功'})
 
})


module.exports = router;