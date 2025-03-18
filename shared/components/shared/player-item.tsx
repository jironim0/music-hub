'use client';

import { Media } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import { SvgPlus } from '../ui/svg';
import { AudioPlayer } from './audio-player';
import useSound from 'use-sound';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { setStop } from '@/shared/store/features/mediaSlice';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { addFavorite } from '@/shared/store/features/favoriteSlice';

interface PlayerItemProps {
  item: Media;
}

export const PlayerItem: React.FC<PlayerItemProps> = ({ item }) => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const [play, { pause, stop, duration, sound }] = useSound(item.filePath);

  React.useEffect(() => {
    dispatch(setStop(stop));
  }, [stop, dispatch]);

  const clickAddFavorite = async () => {
    await axios.post('http://localhost:3000/api/favorite/append', {
      userId: session?.user.id,
      mediaId: item.id,
    });
    dispatch(addFavorite(item)); // Передаем один объект Media
  };

  return (
    <div key={item.id}>
      <div className="pt-[50px]">
        <Image
          src={item.imageUrl}
          width={275}
          height={275}
          alt="player"
          className="rounded-[15px]"
        />
      </div>
      <div className="flex mt-[25px] justify-between">
        <div className="flex flex-col text-[#ffffff] font-light w-[200px]">
          <span className="text-[36px]">{item.title}</span>
          <span className="text-[16px]">{item.authorId}</span>
        </div>
        <div className="cursor-pointer" onClick={clickAddFavorite}>
          <SvgPlus className="w-[48px] h-[48px] fill-[#979797]" />
        </div>
      </div>
      <AudioPlayer play={play} pause={pause} stop={stop} duration={duration} sound={sound} />
    </div>
  );
};