import * as React from "react"
import { twMerge } from "tailwind-merge"


interface Props {
    className?: string
}
export const SvgRight: React.FC<Props> = ({
    className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("fill-[#979797]", className)}

  >
    <path
      d="M7.574 35.312A7.578 7.578 0 0 1 0 27.74V8.26a7.566 7.566 0 0 1 12.042-6.102L19.6 7.706a7.567 7.567 0 0 1 12.02-5.548l13.282 9.74a7.57 7.57 0 0 1 0 12.2l-13.282 9.74a7.566 7.566 0 0 1-12.02-5.544l-7.558 5.548a7.55 7.55 0 0 1-4.468 1.47Zm14.012-12.95a2 2 0 0 1 2 2v3.378a3.567 3.567 0 0 0 5.676 2.876l13.28-9.74a3.566 3.566 0 0 0 0-5.752l-13.28-9.74a3.568 3.568 0 0 0-5.676 2.876v3.378a2 2 0 0 1-3.182 1.612L9.676 5.384A3.568 3.568 0 0 0 4 8.26v19.48a3.568 3.568 0 0 0 5.676 2.876L20.4 22.75a2 2 0 0 1 1.186-.388Z"
    />
  </svg>
)