import React, { useState, useEffect } from "react";
import FireWorks from "../components/Fireworks";
import Typewriter from "typewriter-effect";
import { MusicPlayer } from "../components/MusicPlayer";

const CountdownTimer: React.FC<{
  targetDate: Date;
  onCountdownFinish: () => void;
}> = ({ targetDate, onCountdownFinish }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    const isTargetDatePassed = difference <= 0;

    if (isTargetDatePassed) {
      onCountdownFinish(); // Trigger the countdown finish action
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
  }, [targetDate, onCountdownFinish]);

  // Helper function to format time with leading zeros
  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div>
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0}
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <>
          <FireWorks />{" "}
          <div className="flex justify-center items-center min-h-screen flex-col gap-4">
            <div className="text-white font-bold font-signature text-4xl z-50 ">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Happy New Year🎉`)
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(`Thank You 2023!🎉`)
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-row text-5xl sm:text-6xl lg:text-6xl justify-between shadow-md duration-500 bg-white bg-opacity-20 rounded-lg shadow-sky-500 text-center">
            <div className="w-full sm:w-40 lg:w-40 py-2 sm:p-4 lg:p-4">
              {formatTime(timeLeft.days)}
            </div>
            <div className="w-full sm:w-10 lg:w-20 p-2 sm:p-4 lg:p-4">:</div>
            <div className="w-full sm:w-40 lg:w-40 p-2 sm:p-4 lg:p-4">
              {formatTime(timeLeft.hours)}
            </div>
            <div className="w-full sm:w-10 lg:w-20 p-2 sm:p-4 lg:p-4">:</div>
            <div className="w-full sm:w-40 lg:w-40 p-2 sm:p-4 lg:p-4">
              {formatTime(timeLeft.minutes)}
            </div>
            <div className="w-full sm:w-10 lg:w-20 p-2 sm:p-4 lg:p-4">:</div>
            <div className="w-20 sm:w-40 lg:w-40 py-2 sm:p-4 lg:p-4 text-textRed">
              {formatTime(timeLeft.seconds)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const targetDate = new Date(2024, 11, 31, 23, 59, 59);

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full bg-black flex-col">
        <div className="z-50 text-white ">
          <div className="text-center font-bold font-signature text-4xl sm:text-6xl lg:text-6xl mb-8">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`New Year Countdown`)
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <CountdownTimer
            targetDate={targetDate}
            onCountdownFinish={() => {}}
          />
          <MusicPlayer />
        </div>
      </div>
    </>
  );
};

export default App;
