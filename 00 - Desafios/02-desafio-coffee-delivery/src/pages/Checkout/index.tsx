import { CurrencyDollar, MapPin } from "phosphor-react";
import { ButtonFormaPagamento } from "./components/ButtonFormaPagamento";
import {
  ContainerCafeSelecionado,
  ContainerCheckout,
  ContainerCompletePedido,
  ContainerEndereco,
  ContainerFormEndereco,
  ContainerPagamento,
} from "./styles";

export function Checkout() {
  return (
    <ContainerCheckout>
      <ContainerCompletePedido>
        <h4>Complete seu pedido</h4>
        <ContainerEndereco>
          <div className="headerForm">
            <div className="iconYellow">
              <MapPin size={25} />
            </div>
            <div>
              <span className="titleForm">Endereço de Entrega</span>
              <br />
              <span className="subtitleForm">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>
          <form>
            <ContainerFormEndereco>
              <input
                type="text"
                placeholder="CEP"
                style={{ maxWidth: "12.5rem" }}
              />
              <input
                type="text"
                placeholder="Rua"
                style={{ maxWidth: "100%" }}
              />

              <div className="containerTwoInputs">
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div className="containerThreeInputs">
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" maxLength={2} />
              </div>
            </ContainerFormEndereco>
          </form>
        </ContainerEndereco>
        <ContainerPagamento>
          <div className="headerForm">
            <div className="iconPurple">
              <CurrencyDollar size={25} />
            </div>
            <div>
              <span className="titleForm">Pagamento</span>
              <br />
              <span className="subtitleForm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <div className="containerOpcoesPagamento">
            <ButtonFormaPagamento
              formaPagamento="credito"
              label="CARTÃO DE CRÉDITO"
            />
            <ButtonFormaPagamento
              formaPagamento="debito"
              label="CARTÃO DE DÉBITO"
            />
            <ButtonFormaPagamento formaPagamento="dinheiro" label="DINHEIRO" />
          </div>
        </ContainerPagamento>
      </ContainerCompletePedido>
      <ContainerCafeSelecionado></ContainerCafeSelecionado>
    </ContainerCheckout>
  );
}
