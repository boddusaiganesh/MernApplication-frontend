import React from "react";
import {Link} from "react-router-dom";

function Head(){
    return(
        <div>

        <nav class="navbar bg-primary text-center" >
        <Link to="/" class="navbar-brand text-white "  >VIT-AP</Link>
        <div class="nav" >
            <Link to="/" class="nav-Link mx-3  btn  btn-Success d-block mx-auto text-white ">Home</Link>
        
        </div>
         </nav>
        </div>

    )
}

export default Head;