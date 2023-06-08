
import './style.css';
import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup";


import {  Link } from "react-router-dom";





function Authentification() {

  const {register, handleSubmit} = useForm();

  const sendDataToServer = (data) => {
    console.log(data.fullName)}

  return (
    <div className='authentification'>
       <h5>authentification</h5>

       <form action="" className='form' onSubmit={handleSubmit(sendDataToServer)}>

        <input type="text" placeholder='fullName' {...register("fullName")}/>
        <input type="text" placeholder='licence Number' {...register("licenceNumber")}/>
        <input type="text" placeholder='email address' {...register("email")} />
        <input type="submit" value = "submit" style={{width:"50%"}} />
       </form>

       <Link to = "/dashboard" className='link'>dashboard</Link> 

    </div>
  )
}

export default Authentification