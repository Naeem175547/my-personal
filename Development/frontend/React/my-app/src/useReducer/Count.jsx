import { useReducer } from "react";

function Count(){
    function reducer(state, action){
        switch(action.type){
            case "increment" :
                return { count: state.count + 1 }
            case "decrement" :
                return { count: state.count - 1 }
            case "reset" :
                return { count: 0 }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count:0 } )

    return (
        <div>
            <h2>Count : {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment"})}>+</button>
            <button onClick={() => dispatch({ type: "decrement"})}>-</button>
            <button onClick={() => dispatch({ type: "reset"})}>Reset</button>
        </div>
    )

}

export default Count;



// import React, { useReducer } from 'react';

// export default function Count() {
//   const [count, dispatch] = useReducer((state, action) => {
//     if (action === "inc") return state + 1;
//     if (action === "dec") return state - 1;
//     if (action === "reset") return 0;
//     return state;
//   }, 0);

//   return (
//     <div>
//       <h2>count: {count}</h2>

//       <button onClick={() => dispatch("inc")}>+</button>
//       <button onClick={() => dispatch("dec")}>-</button>
//       <button onClick={() => dispatch("reset")}>reset</button>
//     </div>
//   );
// }