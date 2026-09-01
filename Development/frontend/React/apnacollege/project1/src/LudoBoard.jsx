import { useState } from "react"

export default function LudoBoard(){
    const [moves,setmoves]=useState({
        blue:0,
        green:0,
        red:0,

    }) 
    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
            <p>Blue move={move.green}</p>
            <button>+1</button>
            <p>Yellow Move ={move.green}</p>
             <button>+1 ={move.green}</button>
             <p>Green Move</p>
             <button>+1</button>
             <p>Red Move ={move.green}</p>
             <button>+1</button>
            </div>
        </div>

    )

}