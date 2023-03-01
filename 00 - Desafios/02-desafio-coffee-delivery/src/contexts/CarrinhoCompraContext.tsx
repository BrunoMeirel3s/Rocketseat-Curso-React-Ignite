import { createContext, ReactNode, useEffect, useState } from "react";

interface Coffee {
  id: string;
  amount: number;
  alreadyInCart: boolean;
}

interface CarrinhoCompraContextType {
  selectedCoffees: Coffee[];
  addRemoveCoffeeToCart: (id: string, amount: number) => void;
  decreaseAmountOfCoffee: (id: string) => void;
  increaseAmountOfCoffee: (id: string) => void;
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

  function addRemoveCoffeeToCart(id: string, amount: number) {
    let addedCoffees = selectedCoffees;

    let coffeeToAddOrRemove = addedCoffees.filter((coffee) => coffee.id == id);

    if (coffeeToAddOrRemove.length >= 1) {
      if (coffeeToAddOrRemove[0].alreadyInCart == false) {
        addedCoffees = addedCoffees.map((coffee) => {
          if (coffee.id == id) {
            coffee.alreadyInCart = true;
            coffee.amount = amount;
          }
          return coffee;
        });
      } else {
        addedCoffees = addedCoffees.filter((coffee) => coffee.id !== id);
      }
    } else {
      console.log("café não existe");
    }

    /*
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
        amount: 1,
        alreadyInCart: true,
      });
    }*/

    setSelectedCoffees(addedCoffees);
  }

  function increaseAmountOfCoffee(id: string) {
    let addedCoffees = selectedCoffees;

    let savedCoffees = addedCoffees.filter((coffee) => coffee.id == id);

    if (savedCoffees.length > 0) {
      addedCoffees = addedCoffees.map((coffee) => {
        if (coffee.id == id) {
          coffee.amount++;
        }
        return coffee;
      });
    } else {
      addedCoffees.push({
        id: id,
        amount: 1,
        alreadyInCart: false,
      });
    }

    setSelectedCoffees(addedCoffees);
  }

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

  /**
   * useEffect responsável por salvar no localStorage todas as alterações
   * realizadas no estado
   */
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

  /**
   * useEffect responsável por inserir os valores armazenados no localStorage
   * dentro do estado no qual é armazenado os cafés selecionados isso faz
   * com que sempre que entrarmos em alguma página seja disponibilizado os cafés
   */
  useEffect(() => {
    const localSelectedCoffees = localStorage.getItem(
      "@ignite-coffee-delivery:selectedCoffees"
    );

    if (localSelectedCoffees) {
      setSelectedCoffees(JSON.parse(localSelectedCoffees));
    }
  }, []);

  return (
    <CarrinhoCompraContext.Provider
      value={{
        selectedCoffees,
        addRemoveCoffeeToCart,
        decreaseAmountOfCoffee,
        increaseAmountOfCoffee,
        amountSelectedCoffees,
      }}
    >
      {children}
    </CarrinhoCompraContext.Provider>
  );
}
