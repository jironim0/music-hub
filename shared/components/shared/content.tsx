"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { SelectButton } from "./select-button";
import { SelectedSection } from "./selected-section";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import { addMedia } from "@/shared/store/features/mediaSlice";
import { Media } from "@/shared/interface";
import axios from "axios";

export interface Category {
  id: number;
  name: string;
}

interface CategoryWithMedia extends Category {
  items: Media[];
}

interface Props {
  mediaFromFavoritePage?: Media[];
  className?: string;
}

export const Content: React.FC<Props> = ({
  mediaFromFavoritePage,
  className,
}) => {
  const dispatch = useAppDispatch();
  const stop = useAppSelector((state) => state.items.stop);
  const [selectedCategory, setSelectedCategory] = React.useState<number>(1);
  const [categories, setCategories] = React.useState<CategoryWithMedia[]>([]);
  
  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
      }
    };

    fetchCategories();
  }, []);

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
      {mediaFromFavoritePage ? (
        <div className="max-w-[850px] h-fit mx-auto mt-[25px] flex flex-wrap gap-[50px]">
          <SelectedSection
            items={mediaFromFavoritePage.filter(
              (obj) => obj.categoryId === selectedCategory
            )}
            handleClick={handleClick}
          />
        </div>
      ) : (
        <div className="max-w-[850px] h-fit mx-auto mt-[25px] flex flex-wrap gap-[50px]">
          {categories.map((category, index) => (
            <SelectedSection
              key={index}
              items={category.items.filter(
                (obj) => obj.categoryId === selectedCategory
              )}
              handleClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};
