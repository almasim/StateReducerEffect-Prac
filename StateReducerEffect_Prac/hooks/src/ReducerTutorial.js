import React, { useReducer } from "react";
/*Almasi Milan*/ 
const reducer=(state,action)=>{
    switch (action.type){
        case "szam":
            return { count: state.count + 1, showText: state.showText };
        case "szoveg":
            return{count:state.count,showText: !state.showText};
        default:
            return state
    }
};
 
const ReducerTutorial =()=>{
    const [state,dispatch]=useReducer(reducer,{ count:0 , showText:true})
        return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>{
               dispatch({type:"szam"})
               dispatch({type:"szoveg"})
            }}>Click here</button>
            {state.showText && <p>this is the text</p>}
        </div>
    )
}
export default ReducerTutorial;
