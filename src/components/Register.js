import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import apiUrl from "../config/apiUrl";
import {Link} from 'react-router-dom';


// validation on clientside whether the input field is filled up or not
let registerSchema=yup.object().shape({
  name:yup.string().required(),
  email:yup.string().required().email(),
  password:yup.string().required(),
})



function Register(){
// 
  const{setvalue, register, setError, handleSubmit, reset, formState:{errors}}=useForm({
    resolver:yupResolver(registerSchema)  //passing registerSchema 
  });
  const errorColor={
  color:"red"
  }
  const insertData=(data)=>{
    let sendData=new FormData();
    sendData.append("name",data.name);
    sendData.append("email",data.email);
    sendData.append("password",data.password);

    apiUrl.post("/user",sendData).then((response)=>{
      if(response.data.success){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Successfully",
          // showConfirmButton: false,
          timer: 3000
        });
        reset();
      }else{
        console.log(response.data);
      }
      console.log(response.data);
    }).catch((err)=>{
      console.log(err);
    })

  }  

  return <>
    <h1>Register</h1><br></br>
    <div>
      <form action="" onSubmit={handleSubmit(insertData)}>
          < label htmlFor="name">Name:
            {errors.name && <a style={errorColor}>{errors.name.message}</a>}
         </label><br></br>
          <input type="text" id="name" name="name" {...register("name")}/><br></br><br></br>
  
          < label htmlFor="email">Email:
            {errors.email && <a style={errorColor}>{errors.email.message}</a>}
         </label><br></br>
          <input type="text" id="email" name="email" {...register("email")}/><br></br><br></br>
  
          < label htmlFor="password">Password:
            {errors.password && <a style={errorColor}>{errors.password.message}</a>}
         </label><br></br>
          <input type="password" id="password" name="password" {...register("password")}/><br></br><br></br>

   
          <label htmlFor="image">File:</label>
           <input type="file" name="image" onChange={(e)=>{setvalue("image",e.target.files[0])}}/><br></br><br></br>



          <button>Submit</button>
          <Link to="/login">Login</Link>
      </form>
    </div>
    

  </>
}
export default Register;
