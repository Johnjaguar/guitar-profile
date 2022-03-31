import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chord from '@tombatossals/react-chords/lib/Chord'

const MyChord = ( {chordArr}: {chordArr:number[]}) => {

  const chord = {
      frets: chordArr,
      fingers: [1, 3, 4, 2, 1, 1],
      barres: [1],
      capo: false,
  }
  const instrument = {
      strings: 6,
      fretsOnChord: 4,
      name: 'Guitar',
      keys: [],
      tunings: {
          standard: ['E', 'A', 'D', 'G', 'B', 'E']
      }
  }
  const lite = false // defaults to false if omitted
  try{ 
  return (
      <Chord
          chord={chord}
          instrument={instrument}
          lite={lite}
      />
  )
  }catch(e){
    const chord = {
      frets: [1,2,3,4,5,1],
      fingers: [1, 3, 4, 2, 1, 1],
      barres: [1],
      capo: false,
  }
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
        standard: ['E', 'A', 'D', 'G', 'B', 'E']
    }
}
const lite = false // defaults to false if omitted

    return  <Chord
    chord={chord}
    instrument={instrument}
    lite={lite}
/> 
  }
}

function calculateData (number: number){
  switch(number){
    case 0: return [1,2,2,2,2,1];
    case 1: return [1,2,2,3,3,3];
    case 2: return [1,2,2,3,3,3];
    case 3: return [1,2,2,3,2,1];
    default: 
    return [0,1,2,3,4,4]
  }
}

function App() {
  const [chordState, setChordState] =useState([1,2,3,4,2,2])


  function chordChange(){
      setChordState( calculateData(Math.floor(Math.random()*5)));
  }
  useEffect(() => {
    const timer = setInterval(() => {
      chordChange()
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (<>
    <div className="App">
      {/* <Guitar strings={[0, 1, 2, 2, 0, -1]} />, */}
      <header className="App-header">

      <div className="chords">
      
      <MyChord chordArr={chordState}></MyChord>

      </div>
      <h1 className='title'>John Williams</h1>
        <p>Private Guitar Teacher in San Diego</p>
    <button className='actionButton'>Contact</button>
      </header>
    </div>
    <div>
      <h1>Content</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_NOYQBn9VRY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
  </>
  );
}

export default App;
