import { useState } from "react";

function StudentForm(props){

    const[name,setName]=useState("props.nameValue");
    const[email,setEmail]=useState("props.emailValue");
    const[regno,setRegno]=useState("props.regnoValue");
    const[marks,setMarks]=useState("props.marksValue");
 
    // useEffect(()=>{
    //     setName(props.nameValue);
    //     setEmail(props.emailValue);
    //     setRegno(props.regnoValue);
    //     setMarks(props.marksValue);
    // },[props.nameValue,props.emailValue,props.regnoValue,props.marksValue]);
    
    const arr=[name,email,regno,marks];

    const handleClick=()=>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%" ,margin :"0px auto"}}>
            <input defaultValue={props.nameValue}  onChange={(event)=>setName(event.target.value)   }  class="form-control  my-3 "  placeholder="Enter the name" />
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)   }   class="form-control  my-3 "  placeholder="Enter the email" />
            <input defaultValue={props.regnoValue}  onChange={(event)=>setRegno(event.target.value)   }  class="form-control  my-3 "  placeholder="Enter the regno" />
            <input defaultValue={props.marksValue}  onChange={(event)=>setMarks(event.target.value)   }  class="form-control  my-3 "  placeholder="Enter the marks" />
            <button onClick={handleClick} class="btn btn-success  my-3 d-block mx-auto" type="submit" >Submit</button>
        </div>
    )
}

export default StudentForm;