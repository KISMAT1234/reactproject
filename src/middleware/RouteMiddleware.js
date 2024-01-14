import {Outlet} from "react-router-dom";
import React,{useEffect, useState} from 'react';
import apiUrl from "../config/apiUrl";



function RouteMiddleware(){
    
    let token=localStorage.getItem("token") ?? "";
    const [isLogin, setIsLogin]= useState(false);
    const [loading, setLoading]=useState(true);

    apiUrl.get("/login/tokenmatch",{
        headers:{
            Authorization: `Bearer${isLogin}`
        }
    }).then((response)=>{
        if(response.data.success){
            setIsLogin(true);
            setLoading(true);
        }else{
            setIsLogin(false);
            setLoading(false);
        }
    }).catch((err)=>{
        console.log(err);
    })

 
    if(isLogin){
        return(
            <Outlet/>
        );
    }else{
        window.location.href="/";
    }
    
     

    if(loading){
        return(
            <div>
                <h1>LOADING</h1>
            </div>
        )
    }else{
        if(isLogin){
            return (
                <Outlet/>
            )

        }
    }

}
export default RouteMiddleware;