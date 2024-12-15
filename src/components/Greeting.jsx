import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext'; // Assuming you have a ThemeContext for managing themes

const Greeting = ({ name }) => {
    const [greeting, setGreeting] = useState("");
    const [time, setTime] = useState({
        hours: 10,
        minutes: 10,
        date: 12,
        month: 12,
        year: 2024,
        period: 'pm'
    });

    const { theme } = useTheme(); // Getting current theme from context

    const getTime = () => {
        const now = new Date();
        if (now.getHours() < 12) setGreeting("Good Morning");
        else if (now.getHours() < 18) setGreeting("Good Afternoon");
        else setGreeting("Good Evening");

        let hours = now.getHours();
        const minutes = now.getMinutes();
        const period = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12 || 12;
        const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
      
        setTime({
          hours: hours,
          minutes: minutesFormatted,
          date: now.getDate(),
          month: now.getMonth() + 1,
          year: now.getFullYear(),
          period: period
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`widget greeting ${theme === 'dark' ? 'dark' : ''}`}>
            <div className={`greeting-top ${theme === 'dark' ? 'dark' : ''}`}>
                <h2>{greeting}</h2>
                <h3>{name}</h3>
            </div>
            <div className={`greeting-bottom ${theme === 'dark' ? 'dark' : ''}`}>
                <p>{time.hours}:{time.minutes} {time.period}</p>
                <p>{time.date}-{time.month}-{time.year}</p>
            </div>
        </div>
    );
};

export default Greeting;
