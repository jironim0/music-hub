'use client'

import { Media } from "@/shared/interface";
import Image from "next/image";
import React from "react";

type FavoriteProps = {
  id: number;
  title: string;
  imageUrl: string;
}

interface Props {
  items: Media[] | FavoriteProps[];
  handleClick?: (item: any) => void | undefined;
}

export const SelectedSection: React.FC<Props> = ({ items, handleClick }) => {
  return (
    <>
      {items?.map((item) => (
        <div
          onClick={() => handleClick && handleClick(item)}
          key={item.id}
          className="w-[250px] h-[100px] bg-[#1f1f1f] rounded-[10px] flex cursor-pointer"
        >
          <Image
            src={item.imageUrl}
            width={100}
            height={100}
            alt="Image"
            className="rounded-[10%]"
          />
          <span className="text-[#ffffff] font-semibold text-xl m-auto break-all px-1">
            {item.title}
          </span>
        </div>
      ))}
    </>
  );
};
