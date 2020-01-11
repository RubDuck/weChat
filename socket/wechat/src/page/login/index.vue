<template>
    <div class="Login">
        <div class="L-form">
            <div class="title">
                <div :class="Login?'t-enter':'t-enter sel'" @click="select(false)">
                    账户登录
                </div>
                <div :class="Login?'t-login sel':'t-login'" @click="select(true)">
                   账户注册
                </div>
            </div>
            <div class="form">
                <el-form ref="form" :model="Form" :rules='rules' label-width="80px">
                    <el-form-item label="账号" prop="name" :error="errMessage.errorName">
                        <el-input v-model="Form.name" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" :error="errMessage.errorPassord">
                        <el-input v-model="Form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" size="medium " v-if="Login" @click="submit">注册</el-button>
                        <el-button type="success" size="medium " v-else @click='submit'>登录</el-button> 
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>





<script>
import axios from 'axios';
import qs from 'qs';
export default {
    data () {
        return {
            Login:false,
            Form:{
                name:'',
                password:''
            },
            rules:{
                name:   [{  required: true, message: '请输入账号' }],
                password :[{  required: true, message: '请输入密码' }]
            },
            errMessage:{
                errorName:"",
                errorPassord:""
            },
        }
    }
    ,
    created () {
    },
    methods: {
        select(value){
            this.Login=value
        },
        submit(){
            let that =this
           var params ={...this.Form}
           var url = that.Login? '/user/login':'/user/enter'
           that.errMessage.errorName = ''
           that.errMessage.errorPassord = ''
           that.$refs.form.validate((valid)=>{
               if (valid){
                   axios.post(url,qs.stringify(params)).then(e=>{
                    if(e.data.type==3){
                        if(e.data){
                            that.$store.state.userInfo=e.data.data
                        }
                        that.state(e.data.message,'success')
                        that.$router.push({name:'Friend'})
                    }
                    else if(e.data.type==1){
                        // that.state(e.data.message,'error')
                       that.errMessage.errorName = e.data.message
                    }
                    else{  
                        that.errMessage.errorPassord = e.data.message
                    }
                    })
               }
               else{
                   return
               }
           })
        },
        state(message,type){
            this.$message({
            message: message,
            type: type
        });
        },
    }
}
</script>


<style lang="scss" scoped>
.Login{
    height: 100%;
}
.L-form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 540px;
    width: 380px;
    background: white;
    border-radius: 20px;

}
.title{
    margin: 40px auto;
    width: 200px;
    overflow: hidden;
    .t-enter{
        float: left;
        cursor: pointer;
    }
    .t-login{
        float: right;
        cursor: pointer;
    }
}

/deep/ .el-input{
    width: 80%
}
 /deep/ .el-button{
     width: 80%
 }
</style>