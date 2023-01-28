import { Intro } from "../../components/Intro";
import {
  CardCoffee,
  ContainerCoffeeList,
  ContainerHome,
  ContentCoffeeList,
  PriceAmount,
} from "./styles";

import { ShoppingCartSimple } from "phosphor-react";

import imgTradicional from "../../assets/coffees/black.svg";
export function Home() {
  return (
    <ContainerHome>
      <Intro />
      <ContainerCoffeeList>
        <h1>Nossos cafés</h1>
        <ContentCoffeeList>
          <CardCoffee>
            <img src={imgTradicional} alt="Xícara de café tradicional" />
            <span className="tipo">TRADICIONAL</span>
            <h2>Expresso tradicional</h2>
            <span className="info">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <PriceAmount>
              <div className="price">
                R$ <span>9,90</span>
              </div>
              <div className="amount">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cart">
                <button>
                  <ShoppingCartSimple size={22}/>
                </button>            
              </div>
            </PriceAmount>
          </CardCoffee>
          <CardCoffee>
            <img src={imgTradicional} alt="Xícara de café tradicional" />
            <span className="tipo">TRADICIONAL</span>
            <h2>Expresso tradicional</h2>
            <span className="info">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <PriceAmount>
              <div className="price">
                R$ <span>9,90</span>
              </div>
              <div className="amount">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cart">
                <button>
                  <ShoppingCartSimple size={22}/>
                </button>            
              </div>
            </PriceAmount>
          </CardCoffee>
          <CardCoffee>
            <img src={imgTradicional} alt="Xícara de café tradicional" />
            <span className="tipo">TRADICIONAL</span>
            <h2>Expresso tradicional</h2>
            <span className="info">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <PriceAmount>
              <div className="price">
                R$ <span>9,90</span>
              </div>
              <div className="amount">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cart">
                <button>
                  <ShoppingCartSimple size={22}/>
                </button>            
              </div>
            </PriceAmount>
          </CardCoffee>
          <CardCoffee>
            <img src={imgTradicional} alt="Xícara de café tradicional" />
            <span className="tipo">TRADICIONAL</span>
            <h2>Expresso tradicional</h2>
            <span className="info">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <PriceAmount>
              <div className="price">
                R$ <span>9,90</span>
              </div>
              <div className="amount">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cart">
                <button>
                  <ShoppingCartSimple size={22}/>
                </button>            
              </div>
            </PriceAmount>
          </CardCoffee>
          <CardCoffee>
            <img src={imgTradicional} alt="Xícara de café tradicional" />
            <span className="tipo">TRADICIONAL</span>
            <h2>Expresso tradicional</h2>
            <span className="info">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <PriceAmount>
              <div className="price">
                R$ <span>9,90</span>
              </div>
              <div className="amount">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cart">
                <button>
                  <ShoppingCartSimple size={22}/>
                </button>            
              </div>
            </PriceAmount>
          </CardCoffee>
          <CardCoffee>
            <img src={imgTradicional} alt="Xícara de café tradicional" />
            <span className="tipo">TRADICIONAL</span>
            <h2>Expresso tradicional</h2>
            <span className="info">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <PriceAmount>
              <div className="price">
                R$ <span>9,90</span>
              </div>
              <div className="amount">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cart">
                <button>
                  <ShoppingCartSimple size={22}/>
                </button>            
              </div>
            </PriceAmount>
          </CardCoffee>
        </ContentCoffeeList>
      </ContainerCoffeeList>
    </ContainerHome>
  );
}
