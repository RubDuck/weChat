import $ws from '@/server/index.js';

const  getData = {}

// 发送消息

getData.sendMessage = function(value,data){
    return $ws.sendAsync(JSON.stringify({
        type:'sendMessage',
        msg:value,
        data:data
    }))
}


getData.open = function(value){
    return $ws.sendAsync(JSON.stringify({
        type:'open',
        id:value
    }))
}


export default getData;