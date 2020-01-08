const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const WebSocket = require('ws');
const url  = require('url')

const wss = new WebSocket.Server({ server: server });

wss.on('connection', (ws) => {
  
  // 监听客户端消息
  ws.on('message', (message) => {
    console.log('客户端发来消息')
    console.log(message);
    // let msgData = JSON.parse(message);   
    // if (msgData.type === 'open') {
    //   // 初始连接时标识会话
    //   ws.sessionId = `${msgData.fromUserId}-${msgData.toUserId}`;
    // } else {
    //   let sessionId = `${msgData.toUserId}-${msgData.fromUserId}`;
    //   wss.clients.forEach(client => {
    //     if (client.sessionId === sessionId) {
    //       client.send(message);
    //     }
    //   })  
    // }
    ws.send(message)
  })
  // 连接关闭
  ws.on('close', () => {
    console.log('连接关闭');  
  });

});


app.post('/enter',function(req,res){
  console.log('请求成功')
  res.send('请求成功1')
})
app.get('/enter',function(req,res){
  console.log('请求成功')
  res.send('请求成功2')
})
app.post('/user/enter',function(req,res){
  console.log('请求成功')
  res.send('请求成功3')
})


server.listen(9000, function () {
  console.log('http://localhost:9000');
});
