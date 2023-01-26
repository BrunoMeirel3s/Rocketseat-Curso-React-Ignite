import { Cart, Container, ContainerLocationCart, Location } from "./styles";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import imgLogo from "../../assets/logo.svg";
export function Header() {
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
          <ShoppingCartSimple size={22} />
        </Cart>
      </ContainerLocationCart>
    </Container>
  );
}
