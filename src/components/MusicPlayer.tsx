import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaStop } from "react-icons/fa";

const MusicPlayer: React.FC = () => {
  const [play, setPlay] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const Source: React.FC = () => <source src="strobe.mp3" type="audio/mpeg" />;

  useEffect(() => {
    if (audioRef.current) {
      play ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [play]);

  return (
    <div className="fixed bottom-20 right-10 z-40 rounded-full shadow-md duration-500 bg-white bg-opacity-20  shadow-sky-500 p-2 pr-4 sha">
      <audio ref={audioRef} autoPlay loop>
        <Source />
      </audio>
      <div className="flex items-center space-x-2">
        <button
          className={`h-[46px] w-[46px] rounded-full shadow-md duration-500 bg-white bg-opacity-20 shadow-sky-500 p-2  ${
            play ? "animate-spin" : ""
          }`}
          onClick={() => setPlay(!play)}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-textRed">
            {!play ? <FaPlay size={10} /> : <FaStop size={10} />}
          </div>
        </button>
        <div>
          <h1 className="font-mulish text-[16px] font-semibold text-white">
            Deadmau5
          </h1>
          <p className="font-mulish text-[12px] text-white">Strobe</p>
        </div>
      </div>
    </div>
  );
};

export { MusicPlayer };
