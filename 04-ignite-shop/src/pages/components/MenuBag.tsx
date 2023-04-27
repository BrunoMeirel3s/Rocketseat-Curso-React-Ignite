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
  const { totalPrice, cartCount, redirectToCheckout, cartDetails } =
    useShoppingCart();

  useEffect(() => {
    console.log(cartDetails);
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
            {cartDetails &&
              cartDetails.map((camiseta) => {
                return (
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
                );
              })}
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
            <span>Quantidade</span>{" "}
            <span>
              {cartCount} {cartCount && cartCount > 1 ? "itens" : "item"}
            </span>
          </div>
          <div>
            <strong>Valor Total</strong> <span>{totalPrice}</span>
          </div>
          <button>Finalizar Compra</button>
        </ContainerRodape>
      </MenuBag>
    </>
  );
}
