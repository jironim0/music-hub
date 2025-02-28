import * as React from "react"
import { twMerge } from "tailwind-merge"


interface Props {
    className?: string
}
export const SvgPlus: React.FC<Props> = ({
    className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("", className)}

  >
    <path
      d="M24 0a24 24 0 1 0 24 24A24.026 24.026 0 0 0 24 0Zm0 44a20 20 0 1 1 20-20 20.022 20.022 0 0 1-20 20Zm10-20a2 2 0 0 1-2 2h-6v6a2 2 0 0 1-4 0v-6h-6a2 2 0 0 1 0-4h6v-6a2 2 0 0 1 4 0v6h6a2 2 0 0 1 2 2Z"
    />
  </svg>
)