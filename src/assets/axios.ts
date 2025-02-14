import axios from "axios";
const loggidIn=false;
const token="your-secret-token-from-store";

axios.interceptors.request.use((configur)=>{
    configur.baseURL="https://retoolapi.dev/YHF97G/data";
    if(loggidIn){
        configur.headers['Authorization']="Bearer"+token;
    }
    return configur;
})
axios.interceptors.response.use((response)=>{
    console.log(response);
    return response;
},error=>{
    console.log(error);
    return Promise.reject(error);
})
export default axios