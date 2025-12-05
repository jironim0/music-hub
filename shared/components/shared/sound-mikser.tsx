"use client";

import React from "react";

interface Props {
  duration: number | null;
  sound: any;
}

export const SoundMikser: React.FC<Props> = ({ duration, sound }) => {
  const [currSongTime, setCurrSongTime] = React.useState({ min: 0, max: 0 });
  const [seconds, setSeconds] = React.useState(0);
  const defaultDuration = duration || 0;

  const timeRef = React.useRef(seconds);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        const currentTime = sound.seek();
        timeRef.current = currentTime;
        setSeconds(currentTime);
        setCurrSongTime({
          min: Math.floor(currentTime / 60),
          max: Math.floor(currentTime % 60),
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <div>
      <div>
        <span className="text-[#979797] text-[13px]">
          {currSongTime.min}:
          {currSongTime.max < 10 ? `0${currSongTime.max}` : currSongTime.max}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max={defaultDuration / 1000}
        value={timeRef.current}
        onChange={(e) => {
          sound?.seek(Number(e.target.value));
          timeRef.current = Number(e.target.value);
          setSeconds(Number(e.target.value));
        }}
        className="w-full h-[5px] bg-[#979797] rounded-[5px]"
      />
    </div>
  );
};
