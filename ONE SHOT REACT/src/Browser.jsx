import React, { useRef } from "react";

export const Browser = () => {
    let nationality = useRef(null);

    function Nation() {
        nationality.current = "Indian"; // Update ref value
        document.getElementById("nationalityText").textContent = `Hi, I am Sanket Sidhivinayak, ${nationality.current}`;
        console.log(nationality.current);
        
    }

    return (
        <div>
            <h1 id="nationalityText">Hi, I am Sanket Sidhivinayak</h1>
            <button onClick={Nation}>Click for Get Name</button>
        </div>
    );
};
