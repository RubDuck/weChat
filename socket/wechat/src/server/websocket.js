
var url = 'ws://localhost:9000';

function SubWebSocket(){
    let ws
    this.readyState = 'NOCREATE'
    this.open = function open(){
            ws = new WebSocket(url);     
            ws.onopen = ()=>{
                console.log('连接服务器成功')
                this.readyState = WebSocket.OPEN
            }
            ws.onmessage = (data)=>{
                console.log('服务端反馈')
                console.log(data)
                
            }
            ws.onclose = ()=>{
                console.log('关闭连接')
                this.readyState =WebSocket.CLOSED
            }
        }
    this.send = function send(data){
        if(ws){
            ws.send(data)
        }
    }

};


export default  SubWebSocket;