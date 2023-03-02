import {
  Container,
  ContainerAmount,
  ContainerImage,
  ContainerPrice,
  Content,
} from "./styles";

import imgExpressoTradicional from "../../../../assets/coffees/black.svg";
import imgExpressoAmericano from "../../../../assets/coffees/americano.svg";
import imgExpressoCremoso from "../../../../assets/coffees/expressocremoso.svg";
import imgExpressoGelado from "../../../../assets/coffees/cafegelado.svg";
import imgCafeComLeite from "../../../../assets/coffees/cafecomleite.svg";
import imgLatte from "../../../../assets/coffees/latte.svg";
import imgCapuccino from "../../../../assets/coffees/capuccino.svg";
import imgMacchiato from "../../../../assets/coffees/macchiato.svg";
import imgMocaccino from "../../../../assets/coffees/mochaccino.svg";
import imgChocolateQuente from "../../../../assets/coffees/chocolatequente.svg";
import imgCubano from "../../../../assets/coffees/cubano.svg";
import imgHavaiano from "../../../../assets/coffees/havaiano.svg";
import imgArabe from "../../../../assets/coffees/arabe.svg";
import imgIrlandes from "../../../../assets/coffees/irlandes.svg";

import { coffees } from "../../../../mocks/coffeeList";

import { Coffee, Trash } from "phosphor-react";
import { useEffect, useState } from "react";

interface ItemSelectedCofeeProps {
  imagem: string;
  quantidade: number;
  addRemoveCoffeeToCart: (id: string, amount: number) => void;
  increaseAmountOfCoffee: (id: string) => void;
  decreaseAmountOfCoffee: (id: string) => void;
}

interface detailedCoffee {
  id: string;
  imagem: string;
  tipo: string[];
  info: string;
  preco: number;
}

export function ItemSelectedCoffee({
  imagem,
  quantidade,
  addRemoveCoffeeToCart,
  increaseAmountOfCoffee,
  decreaseAmountOfCoffee,
}: ItemSelectedCofeeProps) {
  const [coffeeName, setCoffeeName] = useState("");

  /**
   *Busca os detalhes do café diretamente do arquivo original
   *com a descrição do mesmo
   */
  const coffeeWithDetail = coffees.filter(
    (coffee: detailedCoffee) => coffee.id == imagem
  );

  useEffect(() => {
    setCoffeeName(coffeeWithDetail[0].nome);
  }, []);

  function addOrRemoveCoffee() {
    addRemoveCoffeeToCart(imagem, quantidade);
  }

  function increaseAmount() {
    increaseAmountOfCoffee(imagem);
  }

  function decreaseAmount() {
    decreaseAmountOfCoffee(imagem);
  }
  return (
    <Container>
      <Content>
        <ContainerImage>
          {/**
           * Abordagem ruim, normalmente é melhor pegar o link da
           * imagem vindo do backend, utilizar assim somente para estudos
           */}
          {imagem === "expressotradicional" && (
            <img
              src={imgExpressoTradicional}
              alt="Xícara de café tradicional"
            />
          )}
          {imagem === "expressoamericano" && (
            <img
              src={imgExpressoAmericano}
              alt="Xícara de expresso americano"
            />
          )}
          {imagem === "expressocremoso" && (
            <img src={imgExpressoCremoso} alt="Xícara de expresso cremoso" />
          )}
          {imagem === "expressogelado" && (
            <img src={imgExpressoGelado} alt="Xícara de expresso gelado" />
          )}
          {imagem === "cafecomleite" && (
            <img src={imgCafeComLeite} alt="Xícara de café com leite" />
          )}
          {imagem === "latte" && (
            <img src={imgLatte} alt="Xícara de café latte" />
          )}
          {imagem === "capuccino" && (
            <img src={imgCapuccino} alt="Xícara de capuccino" />
          )}
          {imagem === "macchiato" && (
            <img src={imgMacchiato} alt="Xícara de macchiato" />
          )}
          {imagem === "mocaccino" && (
            <img src={imgMocaccino} alt="Xícara de mocaccino" />
          )}
          {imagem === "chocolatequente" && (
            <img src={imgChocolateQuente} alt="Xícara de chocolate quente" />
          )}
          {imagem === "cubano" && (
            <img src={imgCubano} alt="Xícara de café cubano" />
          )}
          {imagem === "havaiano" && (
            <img src={imgHavaiano} alt="Xícara de café havaiano" />
          )}
          {imagem === "arabe" && (
            <img src={imgArabe} alt="Xícara de café Árabe" />
          )}
          {imagem === "irlandes" && (
            <img src={imgIrlandes} alt="Xícara de café irlandes" />
          )}
        </ContainerImage>
        <ContainerAmount>
          <div className="caffeeName">{coffeeName}</div>
          <div className="containerButtons">
            <div className="buttonAmount">
              <button onClick={decreaseAmount}>-</button>
              <span>{quantidade}</span>
              <button onClick={increaseAmount}>+</button>
            </div>
            <button className="buttonRemove" onClick={addOrRemoveCoffee}>
              {" "}
              <Trash size={18} /> <span>REMOVER</span>{" "}
            </button>
          </div>
        </ContainerAmount>
        <ContainerPrice>
          <span>
            {(quantidade * coffeeWithDetail[0].preco).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </ContainerPrice>
      </Content>
      <hr />
    </Container>
  );
}
