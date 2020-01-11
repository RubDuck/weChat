import $ws from '@/server/index.js';

const  getData = {}

// 发送消息

getData.sendMessage = function(value,data){
    return $ws.sendAsync({
        type:'sendMessage',
        data:{msg:value,id:data.f_id}
    })
}


export default getData;