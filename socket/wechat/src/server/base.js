import Cookies from 'js-cookie';
import axios from 'axios';
import store from '../store'

var keyWord = 'Hel';
var sid = Cookies.get(keyWord)
var domain = location.pathname

if(sid){
    axios.post('/user/test').then(e=>{
        if(e.data.code==200){
            console.log(store,e.data)
            if(domain == '/login'){
                window.location.href = '/chat'
            }
        }
    })
    
}
else{
    window.location.href='/login'
}