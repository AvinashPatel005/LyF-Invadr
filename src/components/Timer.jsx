import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext'; // Assuming you have a ThemeContext for managing themes

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const { theme } = useTheme(); // Get the current theme (light or dark)

    const timeObj = {
        hours: Math.floor(time / 3600),
        minutes: Math.floor((time % 3600) / 60),
        seconds: time % 60
    };

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }
        if (time === 0) {
            clearInterval(timer);
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };
    const incrementHour = () => {
        setTime(prevTime => prevTime + 3600);
    };
    const decrementHour = () => {
        if (time >= 3600) setTime(prevTime => prevTime - 3600);
    };
    const incrementMin = () => {
        setTime(prevTime => prevTime + 60);
    };
    const decrementMin = () => {
        if (time >= 60) setTime(prevTime => prevTime - 60);
    };
    const incrementSec = () => {
        setTime(prevTime => prevTime + 1);
    };
    const decrementSec = () => {
        if (time > 0) {
            setTime(prevTime => prevTime - 1);
        }
    };

    return (
        <div className={`widget timer ${theme === 'dark' ? 'dark' : ''}`}>
            <p className='timer-visual'>
                {timeObj.hours < 10 ? "0" + timeObj.hours : timeObj.hours}:
                {timeObj.minutes < 10 ? "0" + timeObj.minutes : timeObj.minutes}:
                {timeObj.seconds < 10 ? "0" + timeObj.seconds : timeObj.seconds}
            </p>
            <div className='timer-info'>
                <div className='timer-info-upper'>
                    <div className='btn-section'>
                        <span style={{color:theme==='dark'?"white":"black"}}>Hours</span>
                        <i className='timer-btn bi bi-caret-up-fill' onClick={incrementHour}></i>
                        <p>{timeObj.hours}</p>
                        <i className='timer-btn bi bi-caret-down-fill' onClick={decrementHour}></i>
                    </div>
                    <div className='btn-section'>
                        <span style={{color:theme==='dark'?"white":"black"}}>Minutes</span>
                        <i className='timer-btn bi bi-caret-up-fill' onClick={incrementMin}></i>
                        <p>{timeObj.minutes}</p>
                        <i className='timer-btn bi bi-caret-down-fill' onClick={decrementMin}></i>
                    </div>
                    <div className='btn-section'>
                        <span style={{color:theme==='dark'?"white":"black"}}>Seconds</span>
                        <i className='timer-btn bi bi-caret-up-fill' onClick={incrementSec}></i>
                        <p>{timeObj.seconds}</p>
                        <i className='timer-btn bi bi-caret-down-fill' onClick={decrementSec}></i>
                    </div>
                </div>
                <button className='main-timer-btn' onClick={isRunning ? stopTimer : startTimer} onDoubleClick={resetTimer}>
                    {isRunning ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
};

export default Timer;
