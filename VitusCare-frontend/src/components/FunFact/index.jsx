import React, { useState, useEffect } from 'react';

export default function FunFact({ number, title }) {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    if (title === 'Sessions Completed') {
      // Animation logic for "Sessions Completed"
      const targetNumber = 550000;
      const start = 534312;
      const duration = 10000000;
      const stepTime = 30;
      const steps = Math.ceil(duration / stepTime);
      const increment = (targetNumber - start) / steps;

      let currentNumber = start;
      const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(interval);
        }
        setAnimatedNumber(Math.floor(currentNumber)); // Update state
      }, stepTime);

      return () => clearInterval(interval); // Cleanup on unmount
    } else if (title === 'Satisfied Patients') {
      // Animation logic for "Satisfied Patients"
      const targetNumber = 25000;
      const start = 23325;
      const duration = 3500000; // Total duration in ms
      const stepTime = 30; // Interval between updates in ms
      const steps = Math.ceil(duration / stepTime);
      const increment = (targetNumber - start) / steps;

      let currentNumber = start;
      const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(interval);
        }
        setAnimatedNumber(Math.floor(currentNumber)); // Update state
      }, stepTime);

      return () => clearInterval(interval); // Cleanup on unmount
    } else {
      // For other titles, set the number as is (no animation)
      setAnimatedNumber(0);
    }
  }, [number, title]);

  const formatIndianNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="cs_funfact cs_style_1 text-center">
      <h2 className="cs_funfact_number cs_fs_72">
        {(title === 'Sessions Completed' || title === 'Satisfied Patients')
          ? formatIndianNumber(animatedNumber)
          : number}
      </h2>
      <p className="cs_funfact_title m-0 cs_heading_color">{title}</p>
    </div>
  );
}
