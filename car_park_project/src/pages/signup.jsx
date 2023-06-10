
import './style.css';
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";


import {  Link } from "react-router-dom";





function Authentification() {

  const schema = yup.object().shape({
    fullName:yup.string().required("Full name required"),
    licenceNumber:yup.number().positive().required("licence number required"),
    email:yup.string().email().required("email is required"),
    password: yup.string().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
      ,
      'password must contain at least 4 characters,uppercase,lowercase,number and one special case character'
    ).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),

  })

  const {register, handleSubmit, formState: {errors}} = useForm(
    {resolver:yupResolver(schema)}
  );

  const sendDataToServer = (data) => {
    console.log(data.fullName)
    console.log(data.licenceNumber)
    console.log(data.email)}
   

  return (
    <div className='signup'>
       <h5>authentification</h5>

       <form action="" className='form' onSubmit={handleSubmit(sendDataToServer)}>

        <input className='signup_inputs' type="text" placeholder='fullName' {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>

        <input className='signup_inputs' type="text" placeholder='licence Number' {...register("licenceNumber")}/>
        <p>{errors.licenceNumber?.message}</p>
        

        <input className='signup_inputs' type="password" placeholder="Password..." {...register("password")} />
          <p>{errors.password?.message}</p>

          

        <input type="submit" value = "submit" style={{width:"50%", alignSelf:"center"}} />


       </form>

       <Link to = "/dashboard" className='link'>dashboard</Link> 
       <Link to = "/" className='link'>log in?</Link> 

    </div>
  )
}

export default Authentification