import axios from "axios"
import qs from "querystring"
import router from "../router"
import store from "../store"


const tologin = () =>{
    router.push("/login")
}

const errorHamdle = (status,info)={
    switch(status){
        case 400:
            console.log("网页未找到");
            tologin();
            break;
        case 401:
            console.log("证书不正确");
            tologin();
            break;
        case 403:
            console.log("服务不想处理");
            tologin();
            break;
        case 404:
            console.log("网址请求错误");
            tologin();
            break;
        case 500:
            console.log("代码异常");
            break;
        case 503:
            console.log("资源不足");
            break;
        default:
            console.log(info);
    }
}

const instance =axios.create({
    timeout:5000
})

install.all =axios.all;
instance.spread= axios.spread
instance.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencode';

instance.interceptors.request.use{
    config =>{
        if(config.method ==='post'){
            config.data =qs.stringify(config.data);
        }
        //判断token是否存在，存在
        const token =store.state.loginModule.user.token;
        if(token){
            config.headers.authorization =token;
        }
        return config;
    },
    error => Promise.reject(error)
}

instance.interceptors.response.use{
    response=>response.status===200 ? Promise.resolve(response) : Promise.reject(
        error =>{
            const {response } =error;
            if(response){
                errorHamdle(response.status,response.data);
                return Promise.reject(response);
            }else{
                console.log("请求被中断");
            }
        }
    )
}