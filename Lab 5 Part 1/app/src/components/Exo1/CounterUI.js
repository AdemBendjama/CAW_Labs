import { useState } from 'react'

function CounterUI() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = (event) => {
        if (event.target.id === 'increment') {
            setCounter(counter + 1)
        } else if (event.target.id === 'decrement') {
            setCounter(counter - 1)
        }
    }

    return (
        <div>

            <h1>Counter : {counter}</h1>
            <button onClick={handleIncrement} id='increment' >Inc</button>
            <button onClick={handleIncrement} id='decrement' >Dec</button>
        </div>
    )
}

export default CounterUI;