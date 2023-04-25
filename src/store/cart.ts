import { StoreApi, create, UseBoundStore, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
interface UseCartProps {
  setCart: (state: CartProps) => void;
  //   updateCart: (state: CartProps) => void;
  //   removeCart: (state: CartProps) => void;
  cart: CartProps[];
}

export interface CartProps {
  id: string;
  image: any;
  title: string;
  coin: string;
  price: string;
  quantity: number;
}

// function handleUpdate(cart: CartProps, cartPrev: CartProps[]) {
//   cartPrev.filter((item) => {
//     item.id === cart.id;
//     console.log(item.id === cart.id);
//   });
// }

const useCart = create(
  persist(
    (set) => ({
      setCart: (state: CartProps) =>
        set((prev: UseCartProps) => ({ cart: [...prev.cart, state] })),
      cart: [],
      //   updateCart: (state: CartProps) =>
      //     set((prev: UseCartProps) => handleUpdate(state, prev.cart)),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCart as UseBoundStore<StoreApi<UseCartProps>>;
