import React, { useState } from "react";

/* Almási Milán */

const StateTutorial =()=>{
        const [inputValue,setInputValue] = useState("Cool");
        let onChange = (event) => {
            const newValue = event.target.value;
            setInputValue(newValue);
        };

        const [count,SetCount] = useState(0);
        const increment =()=>{
            SetCount(count+1);
        };
        return(
            <div className="">

                {count} <a></a>
                <button onClick={increment}>Increment</button>
                <p></p>
                <input placeholder="Write Something" onChange={onChange} />
                 {inputValue}
            </div>
        )
};
const StateTutorial2 =()=>{
    
    return(
        <div className="">
          
        </div>
    );
};

export default StateTutorial;