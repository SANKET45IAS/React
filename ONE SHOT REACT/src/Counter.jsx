import React, { useState } from "react";

const Counter = () => {
    const [a, setA] = useState(0);

    const increment = () => {
        setA(a + 1);
    };

    const decrement = () => {
        let i = 0;
        let newA = a;

        while (i < 5) {  // Stops after 5 decrements
            newA -= 1;
            i++;
        }

        setA(newA);  // Update state once after the loop
    };

    return (
        <>
            <h1>Count: {a}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement by 5</button>
        </>
    );
};

export default Counter;
