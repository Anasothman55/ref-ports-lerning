import { useState,useRef } from "react";

export default function Player() {
  const playerNmae = useRef()

  const [enterPlayerName,setenterPlayerName] = useState(null)
  function submitpalyerName(){
    setenterPlayerName(playerNmae.current.value)
    playerNmae.current.value =''
  }
  return (
    <section id="player" >
      <h2>Welcome {enterPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNmae} type="text"/>
        <button onClick={submitpalyerName}>Set Name</button>
      </p>
    </section>
  );
}
