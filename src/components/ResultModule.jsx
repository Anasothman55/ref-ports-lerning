import { forwardRef,useImperativeHandle,useRef, useState } from "react"
import { createPortal } from "react-dom";

const ResultModule = forwardRef(
  function ResultModule({result,targetTime,onReset}, ref){
    

    
    const userLost = result <= 0
    const formatResult = (result/1000).toFixed(5);
    const dialog = useRef()
    const score = Math.round((1-result / (targetTime*1000))*100);
    
    useImperativeHandle(ref, ()=>{
      return{
        open(){
          dialog.current.showModal();
        }
      }
    })
    
    return createPortal (
      <dialog ref={dialog} className="result-modal">
        {userLost && <h2>YOU LOST</h2>}
        {!userLost && <h2>YOUR SCORE: {score}</h2>}
        <p>The target time <strong>{targetTime}</strong> </p>
        <p>you stop the timeer <strong>{formatResult} second left</strong> </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal')
    )
  }
)

export default ResultModule