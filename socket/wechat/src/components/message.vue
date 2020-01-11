<template>
    <div class="Main">
        <div class="searchs">
            <div class="search-box">
                <i class="iconfont search" >&#xe613;</i>
                <input type="text" placeholder="搜索">
            </div>
            <div v-for="(item,index) in list" :key="index" >
                <div :class="active==index?'search-list actives':'search-list'"  @click="send(index,item)" > 
                        <div class="sl_left">
                            <img src="@/assets/images/hg.jpg" alt="" class="IMG">
                        </div>
                        <div class="sl_right" v-if="route =='Chat'">
                            <div class="sl_content">
                                <span class="sl_title">这是名称这是名称这是名称这是名称这是名称</span>
                                <span class="sl_time">2020/01/02</span>
                            </div>
                            <div class="sl_message">这是信息。。</div>
                        </div>
                        <div class="sl_right2" v-else>
                                <span class="sl_title">{{item.f_name}}</span>
                        </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div>
                <div class="co-head">
                    {{talk.f_name}}
                </div>
                <div class="co-message"></div>
                <div class="co-send" v-if="talk">
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
import getData from '../axios/getData';
export default {
    props: ['list'],
    data () {
        return {
            msg:'',
            active:null,
            talk:'',
            route:''
        }
    },
    created () {
        this.route = this.$route.name
        console.log(this.route,this.route == 'Chat')
    },
    methods: {
        sendMessage(value){
            var that =this
           getData.sendMessage(value,that.talk)
        },
        send(value,data){
            this.talk = data
            this.active = value
        }

    }
    
}
</script>




<style lang="scss" scoped>
.Main{
    float: left;
    height: 100%;
    width: 92%;
    background: #ECE9E8;
}
.searchs{  
    float: left;
    height: 100%;
    width: 30%;
    .search-box{
        padding: 3px;
        margin: 30px 30px 30px 15px;
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
    .search-list{
        padding:10px 5px ;
        overflow: hidden;
        .sl_left{
            float: left;
            width: 15%;
        }
        .sl_right{
            float: left;
            padding: 0 10px;
            width: 85%;
            .sl_title{
                display: inline-block;
             width: 60%;
             overflow: hidden;
             text-overflow: ellipsis;
             white-space: nowrap;
             font-size: 14px;
            }
            .sl_time{
                float: right;
                font-size: 12px;
                line-height: 20px;
                color: gray;
            }
        }
        .sl_right2{
            padding: 0 10px;
             width: 60%;
             overflow: hidden;
             text-overflow: ellipsis;
             white-space: nowrap;
             font-size: 14px;
             line-height: 40px;
        }
        .sl_message{
            font-size: 12px;
            color: gray
        }
    }
    .search-list:hover{
         background: #DCDCDC
    }
}
.content{
    float: left;
    height: 100%;
    width:70%;
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