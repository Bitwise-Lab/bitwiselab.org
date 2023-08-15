import React from 'react';
import Countdown from 'react-countdown';
import './countdown.css';

const CountdownTimer = () => {
  const futureDate = new Date('2023-03-10');
  futureDate.setFullYear(futureDate.getFullYear() + 4);

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className='countdown-timer'>
      <div className='countdown-timer__item'>
        <span className='countdown-timer__value'>{days}</span>
        <span className='countdown-timer__label'>Days</span>
      </div>
      <div className='countdown-timer__item'>
        <span className='countdown-timer__value'>{hours}</span>
        <span className='countdown-timer__label'>Hours</span>
      </div>
      <div className='countdown-timer__item'>
        <span className='countdown-timer__value'>{minutes}</span>
        <span className='countdown-timer__label'>Minutes</span>
      </div>
      <div className='countdown-timer__item'>
        <span className='countdown-timer__value'>{seconds}</span>
        <span className='countdown-timer__label'>Seconds</span>
      </div>
    </div>
  );

  return <Countdown date={futureDate} renderer={renderer} />;
};

export default CountdownTimer;
