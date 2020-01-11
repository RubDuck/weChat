<template>
    <div class="Friend">
        <navbar></navbar>
        <message :list = 'friendList'></message>
    </div>
</template>
<script>
import navbar from '@/components/navbar';
import message from '@/components/message';
import service from '@/axios/service.js';
export default {
    data () {
        return {
            userMessage:'',
            friendList:''
        }
    },
    created () {
        this.userMessage = this.$store.state.userInfo
        this.getList()
    },
    methods: {
        getList(){

            var params = {
                user_id:""
            }
            params.user_id = this.userMessage.user_id
            service.firendList(params).then(e=>{
              this.friendList = e.data.data
              })
        }
    },
    components: {
        navbar,
        message
    }
}
</script>



<style lang="scss" scoped>
.Friend{
    margin: 0 auto;
    width: 960px;
    height: 500px;
    border: 1px solid black;
}

</style>