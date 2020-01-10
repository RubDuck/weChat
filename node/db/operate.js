 sql = {
    getUser:"SELECT * FROM tb_user",
    addUser:"INSERT INTO tb_user(user_id,user_name,user_password) VALUES(?,?,?)",
    judgeName:function(name){
        return `SELECT * FROM tb_user WHERE user_name='${name}'`
    },
    judgePassword:function(name,password){
        return `SELECT  * FROM tb_user WHERE user_name='${name}' AND user_password='${password}'` 
    },
    userMessage:function(name){
        return `SELECT * FROM tb_user WHERE user_name='${name}'` 
    }


}


module.exports = sql