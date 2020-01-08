import SubWebSocket from './websocket.js'


class NetWork extends SubWebSocket{
    constructor(){
        super();
        console.log(this)
    }
    sendAsync(data){
        this.send(data)
    }
    install(Vue){
        Vue.prototype.$ws = this
    }

}



export default new NetWork()  ;
