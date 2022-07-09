import {useEffect} from 'react'
import MoleHill from './molehill.png'
//A useEffect hook that will start the timer and clean it up afterward

function EmptySlot(props){
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 6500);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "25vw" }} src={MoleHill} />
    </div>
  );
};

export default EmptySlot;
