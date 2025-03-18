"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { NavBar } from "./navbar";
import { PlayerLanding } from "./audio-landing";
import { useAppSelector } from "@/shared/hooks/hooks";


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
