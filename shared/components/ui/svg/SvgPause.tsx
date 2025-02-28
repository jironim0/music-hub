import * as React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}
export const SvgPause: React.FC<Props> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={twMerge("", className)}>
    <g clipPath="url(#a)">
      <path
        d="M24 0C10.766 0 0 10.766 0 24s10.766 24 24 24 24-10.766 24-24S37.234 0 24 0Zm0 44C12.972 44 4 35.028 4 24S12.972 4 24 4s20 8.972 20 20-8.972 20-20 20Zm-6-28h4v16h-4V16Zm8 0h4v16h-4V16Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
