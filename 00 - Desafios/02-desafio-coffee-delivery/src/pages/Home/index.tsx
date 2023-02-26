import { Intro } from "../../components/Intro";
import {
  ContainerCoffeeList,
  ContainerHome,
  ContentCoffeeList,
} from "./styles";
import { CardCoffee } from "./components/CardCoffee";

import { useContext } from "react";
import { CarrinhoCompraContext } from "../../contexts/CarrinhoCompraContext";

const coffes = [
  {
    id: "expressotradicional",
    imagem: "expressotradicional",
    nome: "Expresso Tradicional",
    tipo: ["TRADICIONAL"],
    info: "O tradicional café feito com água quente e grãos moídos",
    preco: 9.9,
  },
  {
    id: "expressoamericano",
    imagem: "expressoamericano",
    nome: "Expresso Americano",
    tipo: ["TRADICIONAL"],
    info: "Expresso diluído, menos intenso que o tradicional",
    preco: 9.9,
  },
  {
    id: "expressocremoso",
    imagem: "expressocremoso",
    nome: "Expresso Cremoso",
    tipo: ["TRADICIONAL"],
    info: "Café expresso tradicional com espuma cremosa",
    preco: 9.9,
  },
  {
    id: "expressogelado",
    imagem: "expressogelado",
    nome: "Expresso Gelado",
    tipo: ["TRADICIONAL", "GELADO"],
    info: "Bebida preparada com café expresso e cubos de gelo",
    preco: 9.9,
  },
  {
    id: "cafecomleite",
    imagem: "cafecomleite",
    nome: "Café com Leite",
    tipo: ["TRADICIONAL", "COM LEITE"],
    info: "Meio a meio de expresso tradicional com leite vaporizado",
    preco: 9.9,
  },
  {
    id: "latte",
    imagem: "latte",
    nome: "Latte",
    tipo: ["TRADICIONAL", "COM LEITE"],
    info: "Uma dose de café expresso com o dobro do leite e espuma cremosa",
    preco: 9.9,
  },
  {
    id: "capuccino",
    imagem: "capuccino",
    nome: "Capuccino",
    tipo: ["TRADICIONAL", "COM LEITE"],
    info: "Bebida com canela feita de doses iguais de café, leite e espuma     ",
    preco: 9.9,
  },
  {
    id: "macchiato",
    imagem: "macchiato",
    nome: "Macchiato",
    tipo: ["TRADICIONAL", "COM LEITE"],
    info: "Café expresso misturado com um pouco de leite quente e espuma",
    preco: 9.9,
  },
  {
    id: "mocaccino",
    imagem: "mocaccino",
    nome: "Mocaccino",
    tipo: ["TRADICIONAL", "COM LEITE"],
    info: "Café expresso com calda de chocolate, pouco leite e espuma",
    preco: 9.9,
  },
  {
    id: "chocolatequente",
    imagem: "chocolatequente",
    nome: "Chocolate Quente",
    tipo: ["ESPECIAL", "COM LEITE"],
    info: "Bebida feita com chocolate dissolvido no leite quente e café",
    preco: 9.9,
  },
  {
    id: "cubano",
    imagem: "cubano",
    nome: "Cubano",
    tipo: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    info: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    preco: 9.9,
  },
  {
    id: "havaiano",
    imagem: "havaiano",
    nome: "Havaiano",
    tipo: ["ESPECIAL"],
    info: "Bebida adocicada preparada com café e leite de coco",
    preco: 9.9,
  },
  {
    id: "arabe",
    imagem: "arabe",
    nome: "Árabe",
    tipo: ["ESPECIAL"],
    info: "Bebida preparada com grãos de café árabe e especiarias",
    preco: 9.9,
  },
  {
    id: "irlandes",
    imagem: "irlandes",
    nome: "Irlandês",
    tipo: ["ESPECIAL", "ALCOÓLICO"],
    info: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    preco: 9.9,
  },
];

export function Home() {
  const { selectedCoffees, addCoffeeToCart } = useContext(
    CarrinhoCompraContext
  );
  return (
    <ContainerHome>
      <Intro />
      <ContainerCoffeeList>
        <h1>Nossos cafés</h1>
        <ContentCoffeeList>
          {coffes.map((coffee) => {
            return (
              <CardCoffee
                id={coffee.id}
                nome={coffee.nome}
                info={coffee.info}
                preco={coffee.preco}
                tipo={coffee.tipo}
                addCoffeeToCart={addCoffeeToCart}
                selectedCoffees={selectedCoffees}
              />
            );
          })}
        </ContentCoffeeList>
      </ContainerCoffeeList>
    </ContainerHome>
  );
}
