import React, { useEffect, useState } from "react";
import axios from "axios";

/*Almási Milán*/ 

function EffectTutorial(){
    const [data,setData]= useState("");
    const [name,setName]= useState("");
    const [body,setBody]= useState("");
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response)=>{
                setData(response.data[count].email);
                setName(response.data[count].name);
                setBody(response.data[count].body);
                console.log("aPI haS came")
                console.log(response)
            });
    },[count]);
    return(
        <div>
            Hewwoo
            <h1>{data}</h1>
            <p>{name}</p>
            <p>{body}</p>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>nyomogatas</button>
        </div>
    )
}
export default EffectTutorial;