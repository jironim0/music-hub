"use client";

import React from "react";
import { SvgHome, SvgSearch, SvgStar } from "../ui/svg";
import { useClickAway, useDebounce } from "react-use";
import { Api } from "@/shared/services/api-client";
import { Media } from "@prisma/client";
import { cn } from "@/shared/lib/utils";
import { addMedia } from "@/shared/store/features/mediaSlice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import Link from "next/link";

interface Props {
  className?: string;
}

export const NavBar: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const stop = useAppSelector((state) => state.items.stop);

  const ref = React.useRef<HTMLInputElement>(null);
  const [activeHomePage, setActiveHomePage] = React.useState(false);
  const [activeFavoritePage, setActiveFavoritePage] = React.useState(false);
  const [activeInputButton, setActiveInputButton] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [data, setData] = React.useState<Media[]>([]);
  const [focused, setFocused] = React.useState(false);
  const opened = true;

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const res = await Api.media.search(searchValue);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    },
    500,
    [searchValue]
  );
  React.useEffect(() => {
    if(window.location.href !== 'http://localhost:3000/favorite') {
        setActiveFavoritePage(false);
        } else {
        setActiveFavoritePage(true);
    }
  }, [])


  const homeButtonClickAction = () => {
    setActiveHomePage(true);
    setActiveFavoritePage(false);
  };

  const favotiteButtonClickAction = () => {
    setActiveHomePage(false);
    setActiveFavoritePage(true);
  };

  const inputButtonClickAction = () => {
    setActiveHomePage(false);
    setActiveFavoritePage(false);
    setActiveInputButton(true);
    setFocused(true);
  };

  const handleClick = (item: Media) => {
    stop();
    dispatch(addMedia(item));
  };

  return (
    <div className="h-[400px] pt-[100px] rounded-tl-[10px] font-light text-[40px] text-[#979797] flex flex-col">
      <div
        onClick={homeButtonClickAction}
        className={
          activeHomePage && opened
            ? "flex pl-[25px] gap-[25px] h-[50px] items-center  text-[#ffffff]"
            : "flex pl-[25px] gap-[25px] h-[50px] items-center"
        }
      >
        <SvgHome
          className={
            activeHomePage && opened
              ? "h-[50px] w-[52px] fill-[#ffffff]"
              : "h-[50px] w-[52px] fill-[#979797]"
          }
        />
        <Link href={"/"} className="text-center">Home</Link>
      </div>

      {/* input section */}
      
      <div
        onClick={inputButtonClickAction}
        className="flex pl-[25px] mt-[50px] gap-[25px] h-[50px] items-center"
      >
        <SvgSearch
          className={
            activeInputButton
              ? "h-[50px] w-[52px] fill-[#ffffff]"
              : "h-[50px] w-[52px] fill-[#979797]"
          }
        />

        <input
          className="outline-none w-[200px] h-[50px] bg-[#151515] rounded-[10px] text-[#ffffff] text-[40px]"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {data.length > 0 && focused && (
          <div
            ref={ref}
            className="border-[1px] border-[#3b3b3b] ml-[305px] rounded-[10px] mt-[100px] text-xl absolute w-[250px] bg-[#151515] overflow-auto"
          >
            {data.map((item) => (
              <div
                onClick={() => handleClick(item)}
                key={item.id}
                className="py-2 cursor-pointer px-4 hover:bg-gray-200 flex"
              >
                <img
                  src={item.imageUrl}
                  width={50}
                  height={50}
                  alt="Image"
                  className="rounded-[10%]"
                />
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        onClick={favotiteButtonClickAction}
        className={
          activeFavoritePage && opened
            ? "flex pl-[25px] mt-[50px] gap-[25px] h-[50px] items-center text-[#ffffff]"
            : "flex pl-[25px] mt-[50px] gap-[25px] h-[50px] items-center"
        }
      >
        <SvgStar
          className={
            activeFavoritePage && opened
              ? "h-[50px] w-[52px] fill-[#ffffff]"
              : "h-[50px] w-[52px] fill-[#979797]"
          }
        />
        <Link href="/favorite" className="text-center">Favorite</Link>
      </div>
    </div>
  );
};
