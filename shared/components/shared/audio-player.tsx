import React from "react";
import useSound from "use-sound";
import { useAppSelector } from "@/shared/hooks/hooks";
import { SoundMikser } from "./sound-mikser";
import { PlayerButtonGroup } from "./player-button-group";

interface Props {
  play: () => void;
  pause: () => void;
  stop: () => void;
  duration: number | null;
  sound: any;
  className?: string;
}

export const AudioPlayer: React.FC<Props> = ({ 
  play, 
  pause,
  stop,
  duration,
  sound
 }) => {
  const playing = useAppSelector((state) => state.items.playing);

  console.log(playing);


  return (
    <div>
      <SoundMikser duration={duration} sound={sound} />
      <PlayerButtonGroup play={play} pause={pause} stop={stop} />
    </div>
  );
};
