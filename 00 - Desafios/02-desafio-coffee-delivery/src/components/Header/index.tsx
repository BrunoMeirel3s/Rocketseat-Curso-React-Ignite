import { Cart, Container, ContainerLocationCart, Location } from "./styles";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import imgLogo from "../../assets/logo.svg";

import { useContext } from "react";
import { CarrinhoCompraContext } from "../../contexts/CarrinhoCompraContext";
export function Header() {
  const { amountSelectedCoffees } = useContext(CarrinhoCompraContext);
  return (
    <Container>
      <div>
        <img src={imgLogo} alt="" />
      </div>
      <ContainerLocationCart>
        <Location>
          <MapPin size={22} />
          Porto Alegre, RS
        </Location>
        <Cart>
          <a href="/checkout">
            <ShoppingCartSimple size={22} />
            {amountSelectedCoffees >= 1 && <div>{amountSelectedCoffees}</div>}
          </a>
        </Cart>
      </ContainerLocationCart>
    </Container>
  );
}
