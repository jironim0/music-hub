import React from 'react'

interface Props {
    name: string,
    clickSelectedButtonHandler: (id: number) => void,
    categoryId: number,
}

export const SelectedButton: React.FC<Props> = ({
    name,
    clickSelectedButtonHandler,
    categoryId
}) => {
  return (
    <div>
        <button 
        className="w-fit px-4 h-[50px] rounded-3xl bg-[#1F1F1F] text-[#979797] font-semibold text-[24px] hover:bg-[#979797] hover:text-[#1F1F1F]"
        onClick={() => clickSelectedButtonHandler(categoryId)}
        >   
            {name}
        </button>
    </div>
  )
}
