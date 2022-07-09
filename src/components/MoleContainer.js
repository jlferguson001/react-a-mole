import{useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
//handleclick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display(we will pass this down only to Mole components)
//a ternary that will determin which child to render
function MoleContainer(props) {
  let [theMole, setTheMole] = useState(false);

  const handleClick = (e) => {
    props.setScore(props.score + 1);
    setTheMole(false);
  };

  let displayMole = theMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setTheMole}
      handleClick={handleClick}
    />
  ) : (
    <EmptySlot toggle={setTheMole} />
  );

  return (
    <div style={{ display: "inline-block", width: "25vw" }}>{displayMole}</div>
  );
}

export default MoleContainer;