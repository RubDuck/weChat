<template>
    <div class="Login bg">
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
                <el-form ref="form"  label-width="80px">
                    <el-form-item label="账号">
                        <el-input v-model="Form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
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
export default {
    data () {
        return {
            Login:false,
            Form:{
                name:'',
                password:''
            }
        }
    }
    ,
    methods: {
        select(value){
            this.Login=value
        },
        submit(){
            var params = {
                name:'',
                password:''
            }
           var {params} = this.Form
           console.log(params)
            axios.post('/user/enter',params).then(e=>{
                console.log('请求成功',e)
              
            })
        }
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