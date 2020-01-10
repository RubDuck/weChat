import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    userInfo :{
        user_name:null,
        user_id:null
    }
}

const mutations = {
    upUserInfo(isState,options){
        const tar = isState.userInfo
        for(let key in options){
            if(Object.prototype.hasOwnProperty.call(tar,key)){
                tar[key]=options[key]
            }
        }
    }
}


export default new Vuex.Store({
    state,
    mutations
})