import {
  ContainerIntro,
  ContainerImage,
  ContainerText,
  Title,
  SubTitle,
  InfosDelivery,
} from "./styles";
import imgIntro from "../../assets/coffee-delivery.svg";

import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
export function Intro() {
  return (
    <ContainerIntro>
      <ContainerText>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubTitle>
        <InfosDelivery>
          <div>
            <span className="yellowDark">
              <ShoppingCartSimple />
            </span>
            Compra simples e segura
          </div>
          <div>
            <span className="grayDark">
              <Package />
            </span>
            Embalagem mantém o café intacto
          </div>
          <div>
            <span className="yellow">
              <Timer />
            </span>
            Entrega rápida e rastreada
          </div>
          <div>
            <span className="purple">
              <Coffee />
            </span>
            O café chega fresquinho até você
          </div>
        </InfosDelivery>
      </ContainerText>
      <ContainerImage>
        <img src={imgIntro} alt="Imagem copo de café" />
      </ContainerImage>
    </ContainerIntro>
  );
}
