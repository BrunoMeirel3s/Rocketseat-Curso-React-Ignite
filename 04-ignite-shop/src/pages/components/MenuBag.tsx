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
import { useEffect, useState } from "react";
import { MouseEvent } from "react";

interface MenuProps {
  handleOpenCloseMenu: () => void;
}

interface Product {
  name: string;
  id: string;
  price: number;
  image?: string;
}

export default function Menu({ handleOpenCloseMenu }: MenuProps) {
  const { totalPrice, cartCount, redirectToCheckout, cartDetails, removeItem } =
    useShoppingCart();

  const [products, setProducts] = useState<Product[]>([]);

  async function handleFinalizarCompra(event: MouseEvent) {
    event.preventDefault();

    if (cartCount! >= 1) {
      try {
        const result = await redirectToCheckout();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const productsCart = Object.values(cartDetails!);

    const productsLocalCart = productsCart.map((product) => {
      return {
        name: product.name,
        id: product.id,
        price: product.price,
        image: product.image,
      };
    });

    setProducts(productsLocalCart);
  }, [cartDetails]);

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
            {products.map((product) => {
              return (
                <Camiseta key={product.id}>
                  <div className="containerImage">
                    <Image
                      src={product?.image!}
                      alt=""
                      width={94}
                      height={94}
                    />
                  </div>
                  <div className="containerInfos">
                    <span>{product.name}</span>
                    <h3>{product.price}</h3>
                    <button
                      onClick={() => {
                        removeItem(product.id);
                      }}
                    >
                      Remover
                    </button>
                  </div>
                </Camiseta>
              );
            })}
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
          <button
            onClick={(e: MouseEvent) => {
              handleFinalizarCompra(e);
            }}
          >
            Finalizar Compra
          </button>
        </ContainerRodape>
      </MenuBag>
    </>
  );
}
