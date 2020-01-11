import axios from 'axios';
import qs from 'qs';

function fetch(url,data={},method = 'POST'){
    var datas = {}
    if(data){
        for(let key in data){
            datas[key]=data[key]
        }
    }
  return  axios[method](url,qs.stringify(datas))
}
export default fetch;