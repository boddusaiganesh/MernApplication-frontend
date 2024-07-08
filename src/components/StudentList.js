import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";
import TeacherDashboard from "./TeacherLogin/TeacherDashboard";



function StudentList(){
        const[arr,setArr] =useState([]);

        useEffect(()=>{
            Axios.get("https://mernapplication-backend.onrender.com/studentRoute")
            .then((res)=>{
                if(res.status === 200)
                    setArr(res.data);
                else 
                    Promise.reject();

            })
            .catch((err)=>alert(err));
          
        },[])

        const ListItems =()=>{
            return arr.map((val,ind)=>{
                        return <StudentListRow obj={val} />
            })
        }

    return(
        <div>
            <TeacherDashboard />

        <table style={{maxWidth:"80%",margin:"40px auto"}} class="table table-bordered table-striped  table-success">

            <thead>
                <tr>
                    <th class="text-center" >Name</th> 
                    <th class="text-center" >Email</th> 
                    <th class="text-center" >Registration</th> 
                    <th class="text-center" >Marks</th> 
                    <th class="text-center" >Action</th> 

  

                </tr>
                </thead>

                <tbody>

                {ListItems()}

                </tbody>



        </table>  
        </div>

    )
}

export default StudentList;