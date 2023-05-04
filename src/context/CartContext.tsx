import { ReactNode, useState, createContext } from "react";
import ExpressoTradicional from "../data/assets/expresso.svg";
import ExpressoCremoso from "../data/assets/expressoCremoso.svg";

interface Coffee {
  id: string;
  image: any;
  title: string;
  coin: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  coffees: Coffee[];
  setCoffees: React.Dispatch<React.SetStateAction<Coffee[]>>;
  createItem: (coffee: Coffee) => void;
  toIncrementCoffee: (id: string) => void;
  toDecrementCoffee: (id: string) => void;
  removeItem: (id: string) => void;
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

  const toIncrementCoffee = (id: string) => {
    const updatedCartItems = coffees.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCoffees(updatedCartItems);
  };

  const toDecrementCoffee = (id: string) => {
    const updateCartItems: any = coffees
      .map((item) => {
        if (item.id === id) {
          const updatedQuantity = item.quantity - 1;
          if (updatedQuantity <= 0) {
            return;
          }
          return {
            ...item,
            quantity: updatedQuantity,
          };
        }
        return item;
      })
      .filter(Boolean);
    setCoffees(updateCartItems);
  };

  const removeItem = (idToRemove: string) => {
    let newList = coffees.filter((item) => item.id !== idToRemove);
    setCoffees(newList);
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
      value={{
        createItem,
        toIncrementCoffee,
        toDecrementCoffee,
        removeItem,
        coffees,
        setCoffees,
        itemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
