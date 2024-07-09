import {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ParentSignup(){
  
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate =useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://mernapplication-backend.onrender.com/register',{name,email,password})
    .then(result=>{
      navigate('/parent-login');
      console.log(result)
    })
    .catch(err=>console.log(err))
  }

    return(
        <div>
        <div class="container mt-5">
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} method="post" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" name="name" required 
        onChange={(e)=> setName(e.target.value)}
        />
        <div class="invalid-feedback">
          Please provide a name.
        </div>
      </div>
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
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form> 
      <p class="text-center" >Already have an Account</p>
      <Link to="/parent-login" class="btn btn-default w-100 bg-light">Login</Link>
  </div>
  </div>
    )
}

export default ParentSignup;