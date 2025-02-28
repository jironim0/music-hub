import * as React from "react"
import { twMerge } from "tailwind-merge"

interface Props {
    className?: string
}
export const SvgExite: React.FC<Props> = ({className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("", className)}
  >
    <path
      d="M33.314 16.297a1.562 1.562 0 0 1 2.21.045l7.27 7.576c.58.605.58 1.56 0 2.164l-7.27 7.576a1.563 1.563 0 0 1-2.255-2.164L38 26.563H23.485a1.562 1.562 0 1 1 0-3.125h14.517l-4.733-4.932a1.563 1.563 0 0 1 .045-2.21Z"
    />
    <path
      d="M6.77 8.333c0-.863.7-1.562 1.563-1.562H28.03c.863 0 1.563.7 1.563 1.562v6.25a1.562 1.562 0 1 1-3.125 0V9.896H9.896v30.208h16.572v-4.687a1.563 1.563 0 0 1 3.125 0v6.25c0 .863-.7 1.562-1.563 1.562H8.333c-.863 0-1.562-.7-1.562-1.562V8.333Z"
    />
  </svg>
)