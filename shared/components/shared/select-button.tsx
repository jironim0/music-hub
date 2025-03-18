import React from 'react'
import { SelectedButton } from './selected-button';

interface Category {
  name: string;
  id: number;
}

interface Props {
    categories: Category[];
    className?: string;
    clickSelectedButtonHandler: (id: number) => void;
}

export const SelectButton: React.FC<Props> = ({
  categories,
    clickSelectedButtonHandler
}) => {

  return (
    <div className="max-w-[850px] max-h-[50px] mt-[50px] mx-auto flex gap-[25px]">
      {categories.map((category, index) => (
        <SelectedButton clickSelectedButtonHandler={clickSelectedButtonHandler} key={index} name={category.name} categoryId={category.id}/>
      ))}
    </div>
  )
}
