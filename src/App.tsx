import React, { useState, useEffect } from "react";
import "./App.css";

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    const isTargetDatePassed = difference <= 0;

    if (isTargetDatePassed) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeftResult = calculateTimeLeft();
      setTimeLeft(timeLeftResult);

      if (
        timeLeftResult.days === 0 &&
        timeLeftResult.hours === 0 &&
        timeLeftResult.minutes === 0 &&
        timeLeftResult.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <p>Selamat Tahun Baru!</p>
      ) : (
        <p>
          {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
          minutes, {timeLeft.seconds} seconds left
        </p>
      )}
    </div>
  );
};

const App: React.FC = () => {
  // Set your target date here (year, month (0-indexed), day, hour, minute, second)
  const targetDate = new Date(2023, 11, 29, 23, 36, 0);

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;
