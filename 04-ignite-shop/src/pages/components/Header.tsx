import { ContainerHeader } from "@/styles/components/Header";
import { ButtonCart } from "@/styles/pages/app";
import Image from "next/image";
import logoImg from "../../asssets/logo.svg";
import { useState } from "react";
import { Handbag } from "phosphor-react";
import Menu from "./MenuBag";
import { useShoppingCart } from "use-shopping-cart";

export default function Header() {
  const [showBag, setShowBag] = useState(false);

  const { cartCount } = useShoppingCart();

  function handleOpenCloseMenu() {
    setShowBag(!showBag);
  }

  return (
    <ContainerHeader>
      <a href="/">
        <Image src={logoImg} alt="" />
      </a>
      <ButtonCart onClick={handleOpenCloseMenu}>
        <Handbag size={24} />
        <span className="amountItensCart">{cartCount}</span>
      </ButtonCart>
      {showBag && <Menu handleOpenCloseMenu={handleOpenCloseMenu} />}
    </ContainerHeader>
  );
}
