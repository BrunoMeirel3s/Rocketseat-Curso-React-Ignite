import { Coffee } from "phosphor-react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { coffees } from "../mocks/coffeeList";

interface FormEnderecoEntrega {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento?: string;
}

interface Coffee {
  id: string;
  amount: number;
  alreadyInCart: boolean;
  price: number;
  name: string;
}

interface Totals {
  totalDeliveryPrice: number;
  totalCoffeesPrice: number;
}

interface Order {
  endereco: FormEnderecoEntrega;
  coffees: Coffee[];
  totals: Totals;
  formaPagamento: string;
}

interface CarrinhoCompraContextType {
  selectedCoffees: Coffee[];
  addRemoveCoffeeToCart: (id: string, amount: number) => void;
  decreaseAmountOfCoffee: (id: string) => void;
  increaseAmountOfCoffee: (id: string) => void;
  amountSelectedCoffees: number;
  totals: Totals;
  saveOrder: (
    endereco: FormEnderecoEntrega,
    coffees: Coffee[],
    totals: Totals,
    formaPagamento: string
  ) => void;
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
  const [totals, setTotals] = useState<Totals>({} as Totals);
  const [order, setOrder] = useState<Order>({} as Order);

  function addRemoveCoffeeToCart(id: string, amount: number) {
    let addedCoffees = selectedCoffees;

    let coffeeToAddOrRemove = addedCoffees.filter((coffee) => coffee.id == id);

    let detailsOfCoffee = coffees.filter((coffee) => coffee.id == id);

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
        //Remove um café que já está no carrinho
        addedCoffees = addedCoffees.filter((coffee) => coffee.id !== id);

        /**
         * Remove o café do localStorage direto aqui pois identifiquei que
         * o último café não removia, por conta da validação do tamanho do estado
         * que é feita no useEffect, porém sem essa validação o estado inicia vazio
         * e acaba guardando vazio no localStorage
         */
        localStorage.setItem(
          "@ignite-coffee-delivery:selectedCoffees",
          JSON.stringify(addedCoffees)
        );
      }
    } else {
      //Adiciona o café no carrinho caso o mesmo já não esteja
      addedCoffees.push({
        id,
        amount,
        alreadyInCart: true,
        price: detailsOfCoffee[0].preco,
        name: detailsOfCoffee[0].nome,
      });
    }
    setSelectedCoffees(addedCoffees);
  }

  function increaseAmountOfCoffee(id: string) {
    let addedCoffees = selectedCoffees;

    let savedCoffee = addedCoffees.filter((coffee) => coffee.id == id);
    let detailsOfCoffee = coffees.filter((coffee) => coffee.id == id);

    if (savedCoffee.length > 0) {
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
        price: detailsOfCoffee[0].preco,
        name: detailsOfCoffee[0].nome,
      });
    }

    setSelectedCoffees(addedCoffees);
  }

  function decreaseAmountOfCoffee(id: string) {
    let addedCoffees = selectedCoffees;

    let coffeeAlreadyInCart = addedCoffees.filter(
      (coffee) => coffee.id == id && coffee.amount >= 2
    );

    if (coffeeAlreadyInCart.length >= 1) {
      addedCoffees = addedCoffees.map((coffee) => {
        if (coffee.id == id) {
          coffee.amount--;
        }
        return coffee;
      });
    }

    setSelectedCoffees(addedCoffees);
  }

  function saveOrder(
    endereco: FormEnderecoEntrega,
    coffees: Coffee[],
    totals: Totals,
    formaPagamento: string
  ) {
    setOrder({ endereco, coffees, totals, formaPagamento });

    //Salva o estado em localStorage
    const orderJSON = JSON.stringify(order);
    localStorage.setItem("@ignite-coffee-delivery:order", orderJSON);
  }

  /**
   * useEffect responsável por salvar no localStorage todas as alterações
   * realizadas nos estados
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

      const coffesInCart = selectedCoffees;
      const totalDelivery =
        coffesInCart.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price * currentValue.amount;
        }, 0) *
        (10 / 100); //10%

      const totalCoffees = coffesInCart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.amount;
      }, 0);

      setTotals({
        totalDeliveryPrice: totalDelivery,
        totalCoffeesPrice: totalCoffees,
      });

      const totaisJSON = JSON.stringify(totals);
      localStorage.setItem("@ignite-coffee-delivery:totals", totaisJSON);
    }
  }, [selectedCoffees]);

  /**
   * useEffect responsável por ler os dados do localStorage e armazenar os mesmos
   * de volta nos seus respectivos estados afim de poder utilizar os mesmos estados
   * em diversas partes do projeto
   */
  useEffect(() => {
    const localSelectedCoffees = localStorage.getItem(
      "@ignite-coffee-delivery:selectedCoffees"
    );

    if (localSelectedCoffees) {
      let filteredLocalSelectedCoffees = JSON.parse(localSelectedCoffees);

      /**
       * Trás para o checkout apenas cafés que tenham sido adicionados no
       * carrinho
       */
      filteredLocalSelectedCoffees = filteredLocalSelectedCoffees.filter(
        (coffee: Coffee) => coffee.alreadyInCart === true
      );
      setSelectedCoffees(filteredLocalSelectedCoffees);
    }

    const localTotals = localStorage.getItem("@ignite-coffee-delivery:totals");
    if (localTotals) {
      let parsedTotals = JSON.parse(localTotals);
      setTotals(parsedTotals);
    }
  }, []);

  useEffect(() => {
    const localOrder = localStorage.getItem("@ignite-coffee-delivery:order");
    if (localOrder) {
      let parsedOrder = JSON.parse(localOrder);
      setOrder(parsedOrder);
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
        totals,
        saveOrder,
      }}
    >
      {children}
    </CarrinhoCompraContext.Provider>
  );
}
