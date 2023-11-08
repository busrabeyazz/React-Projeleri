import React, { useState } from "react"; // Import useState from react

function Counter() {
    const [count, setCount] = useState(0); // Declare count and setCount using the useState hook

    const increment = () => {
        if (count < 10){
        setCount(count + 1)}; // Increment count
    };
    const decrement = () => {
        if (count > 0) {
        setCount(count - 1)}; // Decrement count
    };

    // Now, return the JSX for your component
    return (
        <div className="container mt-4">
            <div className="Sayac">
            <h3>Count: {count}</h3>
            <br></br>
                <button type="button" class="btn btn-primary" onClick={increment}>Artır</button>
                <button type="button" class="btn btn-danger" onClick={decrement}>Azalt</button> 
            </div>
        </div>
    );
}

export default Counter; // Export the Counter component
