import { X } from "phosphor-react";
import {
  ContainerRodape,
  MenuBag,
  Camiseta,
  ContainerCamisetas,
} from "../../styles/components/MenuBag";

import Image from "next/image";
import imgCamiseta from "../../asssets/camisetas/1.png";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect } from "react";

interface MenuProps {
  handleOpenCloseMenu: () => void;
}

export default function Menu({ handleOpenCloseMenu }: MenuProps) {
  const { totalPrice, cartCount, redirectToCheckout } = useShoppingCart();

  useEffect(() => {
    console.log(cartCount);
  }, []);

  return (
    <>
      <MenuBag>
        <header>
          <button>
            <X size={24} onClick={handleOpenCloseMenu} />
          </button>
        </header>
        <main>
          <h3>Sacola de compras</h3>
          <ContainerCamisetas>
            <Camiseta>
              <div className="containerImage">
                <Image src={imgCamiseta} alt="" width={94} />
              </div>
              <div className="containerInfos">
                <span>Camiseta Beyond the Limits</span>
                <h3>R$ 79,90</h3>
                <button>Remover</button>
              </div>
            </Camiseta>
            <Camiseta>
              <div className="containerImage">
                <Image src={imgCamiseta} alt="" width={94} />
              </div>
              <div className="containerInfos">
                <span>Camiseta Beyond the Limits</span>
                <h3>R$ 79,90</h3>
                <button>Remover</button>
              </div>
            </Camiseta>
            <Camiseta>
              <div className="containerImage">
                <Image src={imgCamiseta} alt="" width={94} />
              </div>
              <div className="containerInfos">
                <span>Camiseta Beyond the Limits</span>
                <h3>R$ 79,90</h3>
                <button>Remover</button>
              </div>
            </Camiseta>
          </ContainerCamisetas>
        </main>
        <ContainerRodape>
          <div>
            <span>Quantidade</span> <span>3 itens</span>
          </div>
          <div>
            <strong>Valor Total</strong> <span>R$ 270,00</span>
          </div>
          <button>Finalizar Compra</button>
        </ContainerRodape>
      </MenuBag>
    </>
  );
}
