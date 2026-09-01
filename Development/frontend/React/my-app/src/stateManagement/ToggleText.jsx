import { useState } from "react";
export default function ToggleText(){
    const [isVisible,SetIsVisible]=useState(false)
    return (
        <>
        <button onClick={()=>SetIsVisible(!isVisible)}>
            {isVisible?" Liked":"like"} Text
        </button>
        {isVisible && <p>visible</p>}
        </>
    )
}