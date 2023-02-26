import { createContext, ReactNode, useState } from "react";

interface Coffee {
  id: string;
  price: number;
  amount: number;
}

interface CarrinhoCompraContextType {
  selectedCoffees: Coffee[];
  addCoffeeToCart: (id: string, price: number) => void;
}

export const CarrinhoCompraContext = createContext(
  {} as CarrinhoCompraContextType
);

interface CarrinhoCompraContextProps {
  children: ReactNode;
}

export function CarrinhoCompraContextProvider({
  children,
}: CarrinhoCompraContextProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<Coffee[]>([]);
  const [amountSelectedCoffees, setAmountSelectedCoffees] = useState<number>(0);

  function addCoffeeToCart(id: string, price: number) {
    let addedCoffees = selectedCoffees;

    let coffeeAlreadyInCart = addedCoffees.filter((coffee) => coffee.id == id);

    if (coffeeAlreadyInCart.length > 0) {
      addedCoffees = addedCoffees.map((coffee) => {
        if (coffee.id == id) {
          coffee.amount++;
        }
        return coffee;
      });
    } else {
      addedCoffees.push({
        id: id,
        price: price,
        amount: 1,
      });
    }

    setSelectedCoffees(addedCoffees);
  }

  return (
    <CarrinhoCompraContext.Provider
      value={{ selectedCoffees, addCoffeeToCart }}
    >
      {children}
    </CarrinhoCompraContext.Provider>
  );
}
