import Player from './components/Player.jsx';
import TimerChalenge from './components/TimerChalenge.jsx';

function App() {

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChalenge title={"Easy"} targtTime={1}/>
        <TimerChalenge title={"Mid"} targtTime={5}/>
        <TimerChalenge title={"hard"} targtTime={10}/>
        <TimerChalenge title={"harder"} targtTime={15}/>
        
      </div>
    </>
  )
}

export default App
