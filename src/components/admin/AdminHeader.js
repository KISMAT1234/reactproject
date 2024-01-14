import React from 'react'
import {useState, useEffect} from 'react'
function AdminHeader(){
    let token=localStorage.getItem("token") ?? "";
    useEffect(()=>{
        const getUser= async ()=>{
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
        }
    })
}


export default AdminHeader;
