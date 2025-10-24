import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import {
  clear,
  decrement,
  increment,
  incrementByAmount,
} from "@/features/counter/counterSlice";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const [amount, setAmount] = useState("1");

  const parsedAmount = Number(amount) || 0;

  return (
    <>
      <Navbar01 />
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col items-center justify-center gap-6 py-10">
        <h1 className="text-2xl font-bold">Redux Counter</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => dispatch(decrement())}
            className="cursor-pointer"
          >
            -
          </Button>
          <span className="text-3xl font-semibold">{count}</span>
          <Button
            onClick={() => dispatch(increment())}
            className="cursor-pointer"
          >
            +
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-24"
          />
          <Button
            onClick={() => dispatch(incrementByAmount(parsedAmount))}
            className="cursor-pointer"
          >
            Add Amount
          </Button>
        </div>
        <Button
          onClick={() => dispatch(clear())}
          className="cursor-pointer h-10 w-50"
        >
          clear
        </Button>
      </div>
    </>
  );
}
