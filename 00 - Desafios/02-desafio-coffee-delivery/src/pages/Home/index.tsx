import { Intro } from "../../components/Intro";
import {
  ContainerCoffeeList,
  ContainerHome,
  ContentCoffeeList,
} from "./styles";
import { CardCoffee } from "./components/CardCoffee";

import { useContext } from "react";
import { CarrinhoCompraContext } from "../../contexts/CarrinhoCompraContext";
import { coffees } from "../../mocks/coffeeList";

export function Home() {
  const { selectedCoffees, addCoffeeToCart, decreaseAmountOfCoffee } =
    useContext(CarrinhoCompraContext);
  return (
    <ContainerHome>
      <Intro />
      <ContainerCoffeeList>
        <h1>Nossos cafés</h1>
        <ContentCoffeeList>
          {coffees.map((coffee) => {
            return (
              <CardCoffee
                id={coffee.id}
                nome={coffee.nome}
                info={coffee.info}
                preco={coffee.preco}
                tipo={coffee.tipo}
                addCoffeeToCart={addCoffeeToCart}
                selectedCoffees={selectedCoffees}
                decreaseAmountOfCoffee={decreaseAmountOfCoffee}
              />
            );
          })}
        </ContentCoffeeList>
      </ContainerCoffeeList>
    </ContainerHome>
  );
}
