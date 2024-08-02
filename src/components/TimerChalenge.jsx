import { useRef, useState } from "react";
import ResultModule from "./ResultModule";


const TimerChalenge = ({title,targtTime}) => {
  const targetTimevar = targtTime*1000
  const timer = useRef()
  const dailog = useRef()

  const [remaningTime,setremaningTime] = useState(targetTimevar)
  
  const timeActive = remaningTime > 0 && remaningTime < targetTimevar

  if( remaningTime <= 0){
    clearInterval(timer.current)
    
    dailog.current.open()
  }

  function handleReset(){
    setremaningTime(targetTimevar)
  }

  function handleStart(){
    timer.current = setInterval(() => {
      setremaningTime(prevTimeRemining => prevTimeRemining - 10)
     
    }, targtTime*10);
  }

  function handleStop(){
    clearInterval(timer.current)
    dailog.current.open()
  }

  return (
    <>
      <ResultModule ref={dailog} targetTime={targtTime} result={remaningTime} onReset={handleReset}/>
      <section className="challenge"> 
        <h2>{title}</h2>
        <p className="challenge-time">{targtTime} seconde{targtTime>1?'s':''}</p>
        <p>
          <button onClick={timeActive ? handleStop : handleStart}>
            {timeActive ?'Stop':'Start'} Challenge
          </button>
        </p>
        <p className={timeActive ?'active':''}>
          {timeActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  )
}

export default TimerChalenge