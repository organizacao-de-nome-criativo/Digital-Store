import { useState } from "react"
import './count.css'


export const Count = () => {
    let [count, setCount] = useState(1)

    const add = () => { 
        setCount(count + 1)
    }

    
    const decrease = () => {
        if(count === 0){
            count = 0
        }else{
            setCount(count - 1)
        }
        
    }

    return(
        <div className="count">
            
            <button onClick={decrease}>-</button>
            <div>{count}</div>
            <button onClick={add}>+</button>
        </div>
    )
}