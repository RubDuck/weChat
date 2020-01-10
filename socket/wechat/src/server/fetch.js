import axios from 'axios';


function fetch(url,data={},method = 'POST'){
    axios.post(url,data)
}
