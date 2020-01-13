import Cookies from 'js-cookie';
import axios from 'axios';
import store from '../store';
import getData from '../axios/getData'

var keyWord = 'Hel';
var sid = Cookies.get(keyWord)
var domain = location.pathname

//简陋的cookie登录判断

if(sid){
    axios.post('/user/test').then(e=>{
        if(e.data.code==200){
            getData.open(e.data.data[0])
            store.commit('upUserInfo', e.data.data[0])
            if(domain == '/login'){
                window.location.href = '/friend'
            }
        }
        else{
            if(domain !== '/login'){
                window.location.href='/login'
            } 
        }
    })
    
}
else {
    if(domain !== '/login'){
        window.location.href='/login'
    } 
   
}