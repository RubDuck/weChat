<template>
    <div class="Main">
        <div class="searchs">
            <div class="search-box">
                <i class="iconfont search" >&#xe613;</i>
                <input type="text" placeholder="搜索">
            </div>
        </div>
        <div class="content">
            <div>
                <div class="co-head">
                    这是聊天信息
                </div>
                <div class="co-message"></div>
                <div class="co-send">
                    <div class="co-send-tool"></div>
                   <textarea name="" id=""  rows="5" v-model="msg"></textarea>
                   <div class="co-send-bot">
                       <div class="box" @click="sendMessage(msg)">
                           发送(S)
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>





<script>
import $ws from '@/server/index.js';
export default {
    data () {
        return {
            msg:''
        }
    },
    methods: {
        sendMessage(value){
           $ws.sendAsync(value)
        }
    }
    
}
</script>




<style lang="scss" scoped>
.Main{
    float: left;
    height: 100%;
    background: #ECE9E8;
}
.searchs{  
    float: left;
    height: 100%;
    .search-box{
        padding: 3px;
        margin: 30px 30px 50px 15px;
        height: 25px;
        width: 240px;
        border-radius: 5px;
        background: #CED1D4;
    }
    input{
        outline: none;
        border: 0;
        font-size: 12px;
        line-height: 12px;
        background: initial;
        
    }
}
.content{
    float: left;
    height: 100%;
    width: 603px;
    background: #F5F5F5;
    .co-head{
        margin-left: 20px;
        height: 70px;
        border-bottom: 1px solid  #ECE9E8;
        font-size: 20px;
        line-height: 70px;
    }
    .co-message{
        height: 280px;
        border-bottom: 1px solid  #ECE9E8;
    }
    .co-send{
        height: 148px;
        background: white;
        .co-send-tool{
            height: 30px;
        }
        textarea{
            resize : none; 
            border: 0;
            width: 100%;
            padding-left:2rem;
        }
          textarea{
          outline: none;
        }
        .co-send-bot{
            .box{
                float: right;
                font-size: 14px;
                width: 60px;
                padding: 2px 5px;
                background: #F5F5F5
            }
        }
    }
}

</style>