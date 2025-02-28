'use client'

import React from 'react'
import { SvgLeft, SvgPause, SvgPlay, SvgRight } from '../ui/svg'
import { useAppDispatch } from '@/shared/hooks/hooks';
import { setPlaying } from '@/shared/store/features/mediaSlice';

interface Props {
    play: () => void;
    pause: () => void;
    stop: () => void;
}

export const PlayerButtonGroup: React.FC<Props> = ({
    play,
    pause,
    stop,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
    const dispatch = useAppDispatch();
    const playButton = () => {
        if (!isPlaying) {
          play();
          setIsPlaying(true);
          dispatch(setPlaying(false));
        } else {
          pause();
          setIsPlaying(false);
          dispatch(setPlaying(true));
        }
      };
    
    
    
      const nextSong = () => {
        stop();
        setIsPlaying(false);
      };
    
      const prevSong = () => {
        stop();
        setIsPlaying(false);
      };
  return (
    <div className="flex justify-between">
        <button onClick={prevSong} className="w-[50px] h-[50px]">
        <SvgLeft className="w-[50px] h-[35px]" />
        </button>
        <button onClick={playButton}>
        {isPlaying ? (
            <SvgPause className="w-[50px] h-[50px] fill-[#979797]" />
        ) : (
            <SvgPlay className="w-[50px] h-[50px]" />
        )}
        </button>
        <button onClick={nextSong}>
        <SvgRight className="w-[50px] h-[35px]" />
        </button>
  </div>
  )
}
