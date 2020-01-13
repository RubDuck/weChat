
var uuid = require('uuid');
var ope = require('./db/index');
var sql = require('./db/operate');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
var session = require('express-session');
var server = require('http').Server(app);
var WebSocket = require('ws');
var url  = require('url');

var wss = new WebSocket.Server({ server: server });

app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  name:'Hel',
  cookie : {
      maxAge : 1000 * 60 * 30, // 设置 session 的有效时间，单位毫秒
      httpOnly: false
  },
}));

//websocket 
wss.on('connection', (ws) => {
  // 监听客户端消息
  ws.on('message', (message) => {
    let msgData = JSON.parse(message);  
    if(msgData.type == 'open'){
      ws.user = msgData.id
    }
    if(msgData.type == 'heartBeat'){
      ws.send(JSON.stringify({type:'heartBeat',message:''}))
    }
    if(msgData.type == 'sendMessage'){
      wss.clients.forEach(client=>{
        console.log(client.user,'-----------',msgData)
        if(client.user&&msgData.data.f_id== client.user.user_id){
          console.log('这里不再像？？')
          client.send(JSON.stringify({
            type:'response',
            msg:msgData.msg,
            chat:client.user,
            user:{user_id:msgData.data.user_id,user_name:msgData.data.user_name}
          }))
        }
      })
    }
  })
  // 连接关闭
  ws.on('close', () => {
    console.log('连接关闭');  
  });

});

// 登录函数
app.post('/enter',function(req,res){
  var name = req.body.name
  var password = req.body.password
   ope.sql(sql.judgeName(name)).then(result1=>{
      if(result1[0]){
        return ope.sql(sql.judgePassword(name,password))
      }
      res.status(200).json({message:'账号错误',type:1,code:400})
      return 'notEnter'
  }).then(result2=>{
    if(result2!=='notEnter'){
      if(result2[0]){
        req.session.user = name; // 登录成功，设置 session
        return res.status(200).json({message:'登陆成功',type:3,data:{user_name:result2[0].user_name,user_id:result2[0].user_id},code:200})
      }
       res.status(200).json({message:'密码错误',type:2,code:400})
    }
  })
})


//注册函数
app.post('/login',function(req,res){
  var id = uuid.v4().slice(0,7)
  var name = req.body.name
  var password = req.body.password
  ope.insertsql(sql.addUser,[id,name,password])
  res.status(200).json({message:'注册成功'})
 
})

//登录判断

app.post('/test',function(req,res){
 if(req.session.user){
 ope.sql(sql.userMessage(req.session.user)).then(e=>{
   res.json({data:e,message:'登录成功',code:200})
 })
 }
 else{
   res.json({message:'请登录',code:400})
 }
 
})

//查询好友列表
app.post('/searchFriend',function(req,res){
  var id = req.body.user_id
  ope.sql(sql.searchFriends(id)).then(e=>{
    res.json({data:e})
  })
})




server.listen(9000, function () {
  console.log('http://localhost:9000');
});
