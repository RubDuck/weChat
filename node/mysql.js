var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database: 'users'
})
connection.connect();

var sql = 'SELECT * FROM tb_user';

connection.query(sql,function(err,result){
    if(err){
        console.log(err.message);
        return
    }
    console.log(result)
})
connection.end();
