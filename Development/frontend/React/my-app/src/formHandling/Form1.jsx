import { useState } from "react";

export default function Form1() {
    const [name, setName] = useState("");

    return (
        <div>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h3>Name: {name || "guest"}</h3>
        </div>
    );
}

// Without value → input is free
// With value → input is controlled by React