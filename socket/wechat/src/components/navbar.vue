<template>
    <div class="Nav">
        <div class="head">
            <img src="@/assets/images/hg.jpg" alt="" class="IMG">
        </div>
        <div class="content">
            <div v-for="(nav,index) in navList" :key="index" class="image" @click="sel(nav)">
                <i :class="$route.meta.nav==nav.name?'iconfont active':'iconfont'">{{nav.icon}}</i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Nav{
    float: left;
    width: 8%;
    height:100%;
    overflow: hidden;
    background: black;
}
.head{
    margin:25px auto;
    height: 40px;
    width: 40px;
    background: white;
    overflow: hidden;
}
.content{
    margin:0 auto;
     height: 40px;
     width: 40px;
     cursor: pointer;
     .image{
            margin-top: 15px;

     }

}
</style>
<script>
import nav from '@/config/nav.js';

export default {
    data () {
        return {
            navList:''
        }
    },
    created () {
        this.navList = nav
    },
    methods: {
        sel(value){
            this.$router.push({name:value.name}).catch(err => err);
        }
    }
    
}
</script>