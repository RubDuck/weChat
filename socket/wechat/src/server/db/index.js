
var db
var dataBase ={}
var dbname ='yt'

function openDataBase(dbname ,fn){
    var version = createVersion()
    window.indexedDB.deleteDatabase(dbname)
    const req = window.indexedDB.open(dbname,version)
    req.onupgradeneeded = function(event){
        db = event.target.result;
        const msgObj = db.createObjectStore('msg',{keyPath:'seq'})
        msgObj.createIndex('f_id','f_id')
        msgObj.createIndex('f_name','f_name')
        msgObj.createIndex('f_message','f_message')
        msgObj.createIndex('u_id','u_id')
        fn()
    }
}

function createVersion() {
    const version =100
    return version ;
  }
console.log('>>>>>>>>>>>>>>>..')

dataBase.setMsg = function(value){
    openDataBase(dbname,function(){
        var result =  db.transaction(dbname, 'readwrite')
        .objectStore('msg')
        .add({ u_id: value.u_id, f_id: value.f_id, f_name: value.f_name, u_message:value.u_message });
    })
   
}

dataBase.getMsg = function(){
    openDataBase(dbname,function(){
        var transaction = db.transaction(dbname);
        var objectStore = transaction.objectStore('msg');
        var request = objectStore.get(1);
        console.log('数据库啊',result)
    })

}


export default dataBase;