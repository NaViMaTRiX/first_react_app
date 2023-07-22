import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
    const [value, setValue] = useState('a');

    return (
        <div className="App">
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button></button>
            <Counter />
        </div>
    );
}

export default App;
