import React from 'react'
import { useState } from 'react'

const TrafficLight = () => {
    const [redActive, setRedActive] = useState(false);
    const [yellowActive, setYellowActive] = useState(false);
    const [greenActive, setGreenActive] = useState(false);
    const [repeat, setRepeat] = useState();

    const simulationStart = () => {
        let counts = 0;
        setRepeat(setInterval(() => {
          if(counts % 3 === 0){
            setRedActive(true);
            setYellowActive(false);
            setGreenActive(false);
          } else if(counts % 3 === 1){
            setRedActive(false);
            setYellowActive(true);
            setGreenActive(false);
          }  else {
            setRedActive(false);
            setYellowActive(false);
            setGreenActive(true);
          } 
          counts++;         
        },10000));
    }
    const simulationStop = () => {
        setRedActive(false)
        setYellowActive(false)
        setGreenActive(false)
        clearInterval(repeat); 
        
        
    }
    return (
        <>
            <div id='trafficBar'></div>
            <div id="trafficRod">
                <div className={`light ${redActive ? "red" : null}`}></div>
                <div className={`light ${yellowActive ? "yellow" : null}`}></div>
                <div className={`light ${greenActive ? "green" : null}`}></div>
            </div>

            <div className='left'>
                <button className='success' onClick={() => simulationStart()}> Start </button>
                <button className='danger' onClick={() => simulationStop()}> Stop </button>
            </div>
        </>
    )
}

export default TrafficLight