import * as React from "react"
import { twMerge } from "tailwind-merge"


interface Props {
    className?: string
}
export const SvgLeft: React.FC<Props> = ({
    className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("fill-[#979797]", className)}

  >
    <path
      d="M20.84 35.312a7.54 7.54 0 0 1-4.466-1.47l-13.282-9.74a7.569 7.569 0 0 1 0-12.2l13.282-9.74A7.566 7.566 0 0 1 28.4 7.706l7.564-5.548A7.568 7.568 0 0 1 48 8.26v19.48a7.569 7.569 0 0 1-12.042 6.102L28.4 28.294a7.58 7.58 0 0 1-7.554 7.018h-.006Zm5.574-12.95a2 2 0 0 1 1.184.388l10.726 7.866A3.567 3.567 0 0 0 44 27.74V8.26a3.57 3.57 0 0 0-5.678-2.876L27.6 13.25a2 2 0 0 1-3.184-1.612V8.26a3.568 3.568 0 0 0-5.678-2.876l-13.28 9.74a3.567 3.567 0 0 0 0 5.752l13.28 9.74a3.567 3.567 0 0 0 5.676-2.876v-3.378a2 2 0 0 1 2-2Z"
    />
  </svg>
)