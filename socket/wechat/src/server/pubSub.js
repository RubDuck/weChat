
class PubSub {
    constructor(){
        this.poll ={};
    }
    addEventListener(name,callBack){
    if(typeof name !== 'string'){
        return;
    }
    if(!this.poll[name]){
        this.poll[name] = []
    }
    var tar = this.poll[name];
    if(typeof callBack == 'function'){
        tar.push(callBack)
    }
    console.log('-----',this.poll)
}
removeEventListener(name,callback){
    var tar = this.poll[name]
    if(typeof name !== 'string'){
        return
    }
    for(let i=0 ;i<this.poll.length;i++){
        if(tar[i].callBack == callback){
            return tar.splice(i,1)
        }
    }
    return false
}

dispatchEvent(name,...args){
   var tag =this.poll[name] 
   for(let i= 0;i<tag.length;i++){
       console.log('开始发布',tag[i])
       if(tag[i]){
           try{
               console.log('执行啊')
               tag[i](args)
           }
           catch(err){
               console.log(err)
           }
       }
   }
}


}


export default PubSub;