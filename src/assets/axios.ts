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
export default axios