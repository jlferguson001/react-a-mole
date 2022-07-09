//A useEffect hook that will start the timer and clean it up afterward
import {useEffect} from 'react'
import moleImg from "./mole.png";


function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
     
       let randSeconds = Math.ceil(Math.random() * 9000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '25vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}


export default Mole