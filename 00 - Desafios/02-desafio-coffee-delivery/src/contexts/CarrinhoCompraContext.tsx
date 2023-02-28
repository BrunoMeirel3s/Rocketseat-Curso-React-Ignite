import { createContext, ReactNode, useEffect, useState } from "react";

interface Coffee {
  id: string;
  price: number;
  amount: number;
}

interface CarrinhoCompraContextType {
  selectedCoffees: Coffee[];
  addCoffeeToCart: (id: string, price: number) => void;
  decreaseAmountOfCoffee: (id: string) => void;
  amountSelectedCoffees: number;
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

  useEffect(() => {
    const amount = selectedCoffees.length;
    setAmountSelectedCoffees(amount);

    if (selectedCoffees.length >= 1) {
      const stateJSON = JSON.stringify(selectedCoffees);
      localStorage.setItem(
        "@ignite-coffee-delivery:selectedCoffees",
        stateJSON
      );
    }
  }, [selectedCoffees]);

  useEffect(() => {
    const localSelectedCoffees = localStorage.getItem(
      "@ignite-coffee-delivery:selectedCoffees"
    );

    if (localSelectedCoffees) {
      setSelectedCoffees(JSON.parse(localSelectedCoffees));
    }
  }, []);

  function decreaseAmountOfCoffee(id: string) {
    let addedCoffees = selectedCoffees;

    let coffeeAlreadyInCart = addedCoffees.filter(
      (coffee) => coffee.id == id && coffee.amount >= 1
    );

    if (coffeeAlreadyInCart.length > 0) {
      addedCoffees = addedCoffees.map((coffee) => {
        if (coffee.id == id) {
          coffee.amount--;
        }
        return coffee;
      });
    }

    setSelectedCoffees(addedCoffees);
  }

  return (
    <CarrinhoCompraContext.Provider
      value={{
        selectedCoffees,
        addCoffeeToCart,
        decreaseAmountOfCoffee,
        amountSelectedCoffees,
      }}
    >
      {children}
    </CarrinhoCompraContext.Provider>
  );
}
