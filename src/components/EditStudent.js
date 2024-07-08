import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useEffect, useState } from "react";
import Axios from "axios";
import TeacherDashboard from "./TeacherLogin/TeacherDashboard";


function EditStudent(){

    const {id} =useParams();
    // alert(id);
    const [initialValue,setInitialValue]= useState({name:"",email:"",regno:"",marks:""})
    const [newData,setNewData]=useState();


    useEffect(()=>{
        Axios.get("https://mernapplication-backend.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email,regno,marks}=res.data;
                setInitialValue({name,email,regno,marks})
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));  
    },[id])


        const getState =(childData)=>{
            setNewData(childData);
        }

        const handleSubmit =()=>{
            const data={name:newData[0],email:newData[1],regno:newData[2],marks:newData[3]}
            Axios.put("https://mernapplication-backend.onrender.com/studentRoute/update-student/"+id,data)
            .then((res)=>{
                if(res.status ===200 )
                    alert("Record updated Successfully")
                else
                    Promise.reject();
            })
            .catch((err)=>alert(err));  
        }
    return(
        <div>
            <TeacherDashboard />
        <form onSubmit={handleSubmit}>
            <StudentForm  getState={getState}
                          nameValue={initialValue.name}
                          emailValue={initialValue.email}
                          regnoValue={initialValue.regno}
                          marksValue={initialValue.marks}   />
        </form>
        </div>

    )
}

export default EditStudent; 