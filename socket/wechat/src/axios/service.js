import fetch from './fetch';
const urlMap = {
    firendList : '/user/searchFriend'
}
const service = {}
Object.keys(urlMap).forEach(e=>{
    service[e] = function(data={},method = 'post'){
        return fetch(urlMap[e],data,method)
    }
    
})
export default service;

