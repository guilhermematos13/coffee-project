import { ReactNode, useState, createContext } from 'react';

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
    const existingCoffee = coffees.find((item) => item.id === coffee.id);
    if (existingCoffee) {
      const newCart = coffees.map((item) => {
        if (item.id === existingCoffee.id) {
          return {
            ...item,
            quantity: item.quantity + coffee.quantity,
          };
        }
        return item;
      });
      setCoffees(newCart);
    } else {
      const newCoffee = {
        ...coffee,
        quantity: 1,
      };

      setCoffees((state) => [...state, coffee]);
    }
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
