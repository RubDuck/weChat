
import pubSub from './pubSub' ; 
import dataBase from './db/index'
const setting = {
    url :'ws://localhost:9000',
    timeout : 1000*10,
    heatTime: 1000*20
}
function SubWebSocket(){
    let ws
    let linkTimeout
    let heartBeat
    let self = this
    let eventTarget = new pubSub()
    eventTarget.addEventListener('message', (e)=>{self.get(e)})

    this.readyState = 'NOCREATE'
    this.open = function open(){
            ws = new WebSocket(setting.url);  
            //超时检测
            linkTimeout =   setTimeout(()=>{
                ws.close()
            },setting.timeout) 

            ws.onopen = ()=>{
                console.log('websocket-open')
                clearTimeout(linkTimeout)
                this.readyState = WebSocket.OPEN
                //心跳包
                heartBeat = setInterval(() => {
                    ws.send(JSON.stringify({type:'heartBeat',message:''}) )
                }, setting.heatTime);

            }
            ws.onmessage = (data)=>{
                console.log('webcosket-connection')
                let params =JSON.parse(data.data)
                console.log(params)
                if(params.type == 'response'){
                    eventTarget.dispatchEvent('message',{
                        data:params
                    })
                } 
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
    this.get = function get(value){
        console.log('这里运行了吧',value)
        dataBase.setMsg({u_id: value.u_id, f_id: value.f_id, f_name: value.f_name, u_message:value.u_message })
        dataBase.getMsg()
    }

};
export default  SubWebSocket;