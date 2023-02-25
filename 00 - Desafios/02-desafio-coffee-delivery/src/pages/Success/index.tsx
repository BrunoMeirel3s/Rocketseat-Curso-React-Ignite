import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ButtonFormaPagamento } from "./components/ButtonFormaPagamento";
import { ItemSelectedCoffee } from "./components/ItemSelectedCoffee";
import imgEntregador from "../../assets/entregador.svg";
import {
  ContainerDadosEntrega,
  ContainerMensagemPadrao,
  ContainerSuccess,
} from "./styles";

export function Success() {
  return (
    <ContainerSuccess>
      <ContainerMensagemPadrao>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </ContainerMensagemPadrao>
      <ContainerDadosEntrega>
        <div className="dadosEntrega">
          <div className="itemDadoEntrega">
            <div className="iconeMapPin">
              <MapPin />
            </div>
            <div className="informacao">
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div className="itemDadoEntrega">
            <div className="iconeTimer">
              <Timer />
            </div>
            <div className="informacao">
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="itemDadoEntrega">
            <div className="iconeCurrency">
              <CurrencyDollar />
            </div>
            <div className="informacao">
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
        <div className="imagemEntrega">
          <img src={imgEntregador} alt="" />
        </div>
      </ContainerDadosEntrega>
    </ContainerSuccess>
  );
}
