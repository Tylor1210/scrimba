import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Add functionality to the minus button
     */
    const [count, setCount] = React.useState(0)
    
    // This is "best practices" whenever were using state and have to modify an old version of state to get our new version
    //   use a callback function like below:
    function add() {
        
        setCount(prevCount => prevCount + 1)
        
        // setCount(function(prevCount) {
        //     return prevCount + 1
        // })
    }
    function subtract() {
        setCount(count - 1)
    }
    
    return (
        <div className="counter"> 
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
