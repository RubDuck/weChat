var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database: 'users'
})
connection.connect();
console.log('这里执行了么')

module.exports = {
    //查询
    sql : function(getsql){
        return new Promise((res,rej)=>{
            connection.query(getsql,function(err,result){
                if(err){
                    console.log(err.message);
                    console.log('查询不存在')
                    rej(false)
                }
               res(result)
            })
        }) 
    } ,
    //插入
    insertsql :  function(addSql,addSqlParams){
        console.log('开始插入')
        connection.query(addSql,addSqlParams,function (err, result) {
                if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return false
                } 
             return result
        });

    }
    
}
