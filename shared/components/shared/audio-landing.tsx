"use client";

import Image from "next/image";
import React from "react";
import { useAppSelector } from "@/shared/hooks/hooks";
import { PlayerItem } from "./player-item";
import { SvgExite } from "../ui/svg";
import { signOut } from "next-auth/react";

interface Props {
  className?: string;
}

export const PlayerLanding: React.FC<Props> = () => {
  const media = useAppSelector((state) => state.items.media);



  if (media.length === 0) {
    return (
      <div className="max-w-[325px] max-h-[600px] ml-[25px] mr-[25px]">
        <div className="pt-[50px]">
          <Image
            src="/assets/album.jpg"
            width={275}
            height={275}
            alt="player"
            className="rounded-[15px]"
          />
        </div>
        <div onClick={() => signOut()}>
          <SvgExite className="w-[48px] h-[48px] fill-[#979797] cursor-pointer"/>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[325px] max-h-[600px] ml-[25px] mr-[25px]">
      <PlayerItem item={media[0]}/>
      <div onClick={() => signOut()}>
        <SvgExite className="w-[48px] h-[48px] fill-[#979797] cursor-pointer"/>
      </div>

    </div>
  );
};
