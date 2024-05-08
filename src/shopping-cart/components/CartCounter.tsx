"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/CounterSlice";
import { useEffect } from 'react';

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}


const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(data => data.json())
  console.log(data)
  return data;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter().then(data => dispatch(initCounterState(data.count)))
  }, [dispatch])


  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="mx-2 px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
        >
          +
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
        >
          -
        </button>
      </div>
    </>
  );
};
