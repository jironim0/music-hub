"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { SelectButton } from "./select-button";
import { SelectedSection } from "./selected-section";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import { addMedia } from "@/shared/store/features/mediaSlice";
import { Media } from "@/shared/interface";

export type CategoryWithMedia = {
  createdAt: Date;
  id: number;
  items: Media[]
  name: string;
  updatedAt: Date;
}

interface Props {
  categories: CategoryWithMedia[];
  className?: string;
}

export const Content: React.FC<Props> = ({ categories, className }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<number>(1);
  const dispatch = useAppDispatch()
  const stop = useAppSelector(state => state.items.stop)

  const handleClick = (item: Media) => {
    stop();
    dispatch(addMedia(item));
  };

  const clickSelectedButtonHandler = (id: number) => {
    setSelectedCategory(id);
  };


  return (
    <div className={cn("w-[949px] h-screen rounded-tr-[10px]", className)}>
      <SelectButton
        categories={categories}
        clickSelectedButtonHandler={clickSelectedButtonHandler}
      />

      <div className="max-w-[850px] h-fit mx-auto mt-[25px] flex flex-wrap gap-[50px]">
        {categories.map((category, index) =>
          <SelectedSection 
          key={index} 
          items={category.items.filter((obj) => obj.categoryId === selectedCategory)}
          handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};
