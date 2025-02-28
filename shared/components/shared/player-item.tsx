'use client'

import { Media } from '@prisma/client';
import Image from 'next/image';
import React from 'react'
import { SvgPlus } from '../ui/svg';
import { AudioPlayer } from './audio-player';
import useSound from 'use-sound';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { setStop } from '@/shared/store/features/mediaSlice';

interface PlayerItemProps {
    item: Media;
}

export const PlayerItem: React.FC<PlayerItemProps> = ({ 
    item, 

 }) => {
    const dispatch = useAppDispatch()
    const [play, { pause, stop, duration, sound }] = useSound(item.filePath);
    React.useEffect(() => {
      dispatch(setStop(stop))
    }, [stop])

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
                <SvgPlus className="w-[48px] h-[48px] fill-[#979797]" />
            </div>
            <AudioPlayer play={play} pause={pause} stop={stop} duration={duration} sound={sound} />
        </div>
    )
}