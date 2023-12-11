import router from "./index"

router.beforeEach((to,from,next) =>{
    if(to.meta.isLogin){
        const token=true;
        if(token){
            next();
        }else{
            next({
                path:"/login"
            })
        }
    }else{
        next();
    }
})