"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { SvgPlus } from "../ui/svg";
import Image from "next/image";
import { NavBar } from "./navbar";
import { AudioPlayer } from "./audio-player";
import { PlayerLanding } from "./audio-landing";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import useSound from "use-sound";
import { setStop } from "@/shared/store/features/mediaSlice";

interface Props {
  className?: string;
}

export const Navigation: React.FC<Props> = ({ className }) => {
  const media = useAppSelector((state) => state.items.media);


  return (
    <div
      className={cn(
        "max-w-[325px] bg-[#151515] rounded-tl-[10px]",
        className
      )}
    >
      <NavBar />
      <PlayerLanding/>
    </div>
  );
};
