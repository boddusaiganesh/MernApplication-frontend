import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";
import TeacherDashboard from "./TeacherLogin/TeacherDashboard";

function CreateStudent(){

    const [arr,setArr] = useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }

    const handleSubmit =()=>{
            const data={name:arr[0],email:arr[1],regno:arr[2],marks:arr[3]}
            Axios.post("https://mernapplication-backend.onrender.com/studentRoute/create-student",data)
            .then((res)=>{
                if(res.status === 200)
                    alert("Record added successfully");
                else
                    Promise.reject();

            })
            .catch((err)=>alert(err));
            // event.target.reset();
    }
    return(
        <div>

        <TeacherDashboard />

        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} />
        </form>
        </div>

        
    )
}

export default CreateStudent;