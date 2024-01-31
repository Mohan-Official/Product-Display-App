import React, { useEffect, useState } from 'react';

const OfferTime = () => 
{
    const calculateTimeRemaining = () => {
    const targetDate = new Date('05/23/2024 00:00:00')
    const today = new Date();
    const timeRemaining = targetDate - today;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)).toString();
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setCountdown({ days, hours, minutes, seconds });
    } else {
      clearInterval(interval);
    }
  };

  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  
  useEffect(() => {
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <section className='timerSection'>
            <li className="timer timerFirst">{countdown.days} <span>days</span> </li>
            <li className="timer">{countdown.hours} <span>hours</span></li>
            <li className="timer">{countdown.minutes} <span>min</span></li>
            <li className="timer">{countdown.seconds} <span>sec</span></li>
        </section>     
    </>
  );
};

export default OfferTime;