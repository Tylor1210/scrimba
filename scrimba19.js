import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    function toggle() {
        console.log("Clicked!")
    }
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

// Box.js file for this challenge add (onClick)

// import React from "react"

// export default function Box(props) {
    
//     const styles = {
//         backgroundColor: props.on ? "#222222" : "transparent"
//     }
    
//     return (
//         <div 
//             style={styles} 
//             className="box"
//             onClick={props.toggle}
//         >
//         </div>
//     )
// }