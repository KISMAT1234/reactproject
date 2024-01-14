import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import apiUrl from "../config/apiUrl";
import {Link} from 'react-router-dom';
import axios from 'axios';

let registerSchema=yup.object().shape({
  name:yup.string().required(),
  password:yup.string().required(),
})



function Login(){

    // validating input field
    const{ register, setError, handleSubmit, reset, formState:{errors}}=useForm({
        resolver:yupResolver(registerSchema)
    });
    const errorColor={
        color:"red"
    }



    // 
    const insertData=(data)=>{
    axios.post("/login",data).then((response)=>{    
        if(response.data.token === 200){
             if(response.data.notfound){
                 setError("Email",{
                    type:"manual",
                    message:response.data.notfound
                 })
             }else if(response.data.incorrect){
                setError("password",{
                    type:"manual",
                    message:response.data.incorrect
                 })
             }else{
                localStorage.setItem("token",response.data.token);  //storing token in localstorage 
                reset();
                window.location.href="/admin";
             }
        }
        }).catch((err)=>{
        console.log(err);
    })

  }  

  return <>
    <h1>Login</h1><br></br>
    <div>
      <form action="" onSubmit={insertData}>
        
  
          < label htmlFor="email">Email:
            {errors.email && <a style={errorColor}>{errors.email.message}</a>}
         </label>
          <input type="text"/><br></br>
  
          < label htmlFor="password">Password:
            {errors.password && <a style={errorColor}>{errors.password.message}</a>}
         </label>
          <input type="text"/><br></br>

          <Link to="/login">Login</Link>
      </form>
      <Link to="/register">register</Link>
    </div>
    

  </>
}
export default Login;