import { useRef, useState } from "react";
import moneyBag from "../../assets/images/dollars.png";
import useSound from "use-sound";
import wind from "../../assets/sounds/wind.wav";
import "./start.scss";

const Start = ({ setUsername }) => {
  const inputRef = useRef();
  const [enter] = useSound(wind);
  const [started, setStarted] = useState(false);
  const [titleClass, setTitleClass] = useState('title');
  const [startClass, setStartClass] = useState('start');
  
  const rotateTitle =()=>{
    titleClass === 'title'? setTitleClass('title rotate'): setTitleClass('title')
  };

  const handleClick = () => {
    const name = inputRef.current.value;
    if(name){
      userName.push(name);
      setStarted(true);
      setStartClass('start clear'); 
      enter();
      setTimeout(() => {
        setUsername(name);
      }, 3000);
    }
  };

  return (
    <div className={startClass}>
      {!started? (
        <>
          <div className={titleClass} onMouseEnter={rotateTitle} onMouseLeave={rotateTitle}>
            <img src={moneyBag} alt="Money Bag" className="img"/>
            <h1 className='text'> Play <br />Become a Millionaire Today!</h1>
          </div>
          <div className="form">
          <input
            className="startInput"
            placeholder="enter your name"
            ref={inputRef}
          />
          <button className="startButton" onClick={handleClick}>
            Start
          </button>
        </div> 
      </>
      ):(
        <div>
          <h1 style={{fontSize:'48px'}}> Are you ready {userName}? Let's begin!</h1>
      </div>  
      )}  
    </div>
  );
}

export default Start;
export const userName = [];