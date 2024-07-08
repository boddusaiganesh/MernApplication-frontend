import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav class="navbar bg-warning text-center" >
            <Link to="/" class="navbar-brand text-center" mx-3 >CRUD OPERATION</Link>
            <div class="nav" >
                <Link to="/create-student" class="nav-Link mx-3   ">Create Student</Link>
                <Link to="/student-list" class="nav-Link mx-3  ">Student List</Link>

            </div>
        </nav>
    )
}

export default Nav; 