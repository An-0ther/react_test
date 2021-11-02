import React, { useState } from 'react';

const Counter = () => {
    const [count, setСount] = useState(0)

    function increment() {
        setСount(count + 1)
    }

    function decrement() {
        setСount(count - 1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;