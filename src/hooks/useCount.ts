import { create } from "zustand";

interface CounterState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

const useCount = create<CounterState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCount;
