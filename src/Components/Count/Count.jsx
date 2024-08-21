import { useState } from "react"
import './count.css'


export const Count = ({ onChange }) => {
    let [count, setCount] = useState(1)
    const [index, setIndex] = useState()

    


    const add = () => { 
        const newCount = count + 1 
        setCount(count + 1)
        onChange(newCount)
    }

    const decrease = () => {
        if(count === 0){
            count = 0
        }else{
            const newCount = count - 1
            setCount(newCount)
            onChange(newCount)
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