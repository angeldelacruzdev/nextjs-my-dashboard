"use client";
import { useAppSelector } from "@/store";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.conunter.counter);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          // onClick={() => setCount(count + 1)}
          className="mx-2 px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
        >
          +
        </button>
        <button
          // onClick={() => setCount(count - 1)}
          className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
        >
          -
        </button>
      </div>
    </>
  );
};
