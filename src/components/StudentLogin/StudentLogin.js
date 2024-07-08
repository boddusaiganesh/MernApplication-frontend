import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";    
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function StudentLogin(){

    const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate =useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://mernapplication-backend.onrender.com/login ',{email,password})
        .then(result=>{
            console.log(result)
          if(result.data === "Success"){
            navigate('/student-dashboard')
          }
        })
        .catch(err=>console.log(err))
      }

    return(
        <div>
            <div class="container mt-5">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} method="post" class="needs-validation" novalidate>
            <div class="mb-3">
        <label for="registration" class="form-label">Registration Email</label>
        <input type="email" class="form-control" id="registration" name="registration" required 
                onChange={(e)=> setEmail(e.target.value)}
        />
        <div class="invalid-feedback">
          Please provide a valid email address.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" name="password" required 
                onChange={(e)=> setPassword(e.target.value)}
        />
        <div class="invalid-feedback">
          Please provide a password.
        </div>
      </div>
      <button type="submit" class="btn btn-secondary">Login</button>
    </form>
        </div>
        <p class="text-center" >Don't have an Account</p>
      <Link to="/register" class="btn btn-default w-100 bg-light">Sign Up</Link>
  </div>
    
    )
}

export default StudentLogin;