import axios from "axios";
import {reactCookies} from "react-cookie"
import { addAllUserSlice } from "../features/AllVideo";
import { addUser,updateVideo } from "../features/videoSlice";


let refreshToken;
const maxAgeAuth=3*24*60*60*1000;
const instance=axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials:true,
});

// signup
export const signupAction=(data)=>{
    instance.post("/signup",data).then(res=>{
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
    return "successfull";
}

// signin
export const signinAction=(data)=>{
    return ()=>{
        instance.post("/login",data).then(res=>{
            const token=res.data.token;
            refreshToken=token;
            instance.defaults.headers.common['authorization']=`Bearer ${token}`;
            reactCookies.save("jwt",token,{maxAge:maxAgeAuth});
        }).catch(err=>{
            console.log(err);
        })
    }
}

// interceptor
instance.interceptors.response.use(res=>{
    return res;
},async function(err){
    const originalRequest=err.config
    if(err.config.url !=="/refreshToken" && err.response.status ===401){
        if(refreshToken && refreshToken !==""){
            instance.defaults.headers.common['authorization']=`Bearer {refreshToken}`;
            await instance.post("/refreshToken").then(res=>{
                instance.defaults.headers.common['authorization']=`Bearer {res.data.accessToken}`;
                originalRequest.headers['authorization']=`Bearer ${res.data.accessToken }`;
            }).catch(error=>{
                refreshToken=null;
            });
            return instance(originalRequest)
        }
    }
});

// get only user
export const getOnlyUserAction=(id)=>{
    return (dispatch)=>{
        instance.get(`/onUser/${id}`).then(res=>{
            dispatch(addUser(res.data));
        }).catch(err=>{
            console.log("no user !");
        })
    }
}

// add video
export const addVideoAction=(id,data)=>{
    return (dispatch)=>{
        instance.patch(`/addVideo/${id}`,data).then(res=>{
            dispatch(updateVideo(res.data));
        })
    }
}

// get all 
export const AllUserAction=()=>{
    return (dispatch)=>{
        instance.get("/").then(res=>{
            dispatch(addAllUserSlice(res.data))
        })
    }
}