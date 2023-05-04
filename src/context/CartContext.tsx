import { ReactNode, useState, createContext } from "react";
import ExpressoTradicional from "../data/assets/expresso.svg";
import ExpressoCremoso from "../data/assets/expressoCremoso.svg";

interface Coffee {
  id: string;
  image: any;
  title: string;
  coin: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  coffees: Coffee[];
  createItem: (coffee: Coffee) => void;
  toUpdateItem: () => void;
  removeItem: () => void;
  itemsQuantity: () => number;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: TransactionProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const createItem = (coffee: Coffee) => {
    setCoffees((state) => [...state, coffee]);
    /* ForEach
       Verificar se o id do novo item e igual a algum id ja existente, se sim substituir a quantidade
    */
    coffees.forEach((item, index) => {
      coffee.id === item.id;
    });
  };

  const toUpdateItem = () => {
    console.log("Oii");
  };

  const removeItem = () => {
    console.log("Oiii");
  };

  const itemsQuantity = () => {
    let quantity = 0;
    coffees.map((coffee) => {
      quantity += coffee.quantity;
    });

    return quantity;
  };

  return (
    <CartContext.Provider
      value={{ createItem, toUpdateItem, removeItem, coffees, itemsQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
