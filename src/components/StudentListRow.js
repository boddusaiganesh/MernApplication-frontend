import Axios from "axios";
import { Link } from "react-router-dom";
function StudentListRow(props){


    const {_id,name,email,regno,marks}= props.obj;

    const handleClick =()=>{
        Axios.delete("https://mernapplication-backend.onrender.com/studentRoute/delete-student/" + _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();

        })
        .catch((err)=>alert(err));
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{regno}</td>
            <td>{marks}</td>
            <td>
                <button class="btn btn-success">
                  <Link class="text-decoration-none text-light" to={"/edit-student/"+_id} >Edit</Link>      
                </button>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default StudentListRow;