import {
  Container,
  ContainerAmount,
  ContainerImage,
  ContainerPrice,
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

interface ItemSelectedCofeeProps {
  imagem: string;
  nome: string;
  preco: number;
  quantidade: number;
}

export function ItemSelectedCoffee({
  imagem,
  nome,
  preco,
  quantidade,
}: ItemSelectedCofeeProps) {
  return (
    <Container>
      <ContainerImage>
        {/**
         * Abordagem ruim, normalmente é melhor pegar o link da
         * imagem vindo do backend, utilizar assim somente para estudos
         */}
        {imagem === "expressotradicional" && (
          <img src={imgExpressoTradicional} alt="Xícara de café tradicional" />
        )}
        {imagem === "expressoamericano" && (
          <img src={imgExpressoAmericano} alt="Xícara de expresso americano" />
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
      <ContainerAmount></ContainerAmount>
      <ContainerPrice></ContainerPrice>
    </Container>
  );
}
