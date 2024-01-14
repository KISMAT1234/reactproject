import React from "react";
import * as yup from 'yup';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


let registerSchema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required(),
    password:yup.string().required(),
  })

  function RegisterComponents(){

    const{setvalue, register, setError, handleSubmit, reset, formState:{errors}}=useForm({
      resolver:yupResolver(registerSchema)
  });
  let pStyle={
    color:"#f60000"
  }

  let [createUser]=useAddUserMutation
};