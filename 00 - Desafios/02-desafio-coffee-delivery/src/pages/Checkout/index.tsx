import { MapPin } from "phosphor-react";
import {
  ContainerCafeSelecionado,
  ContainerCheckout,
  ContainerCompletePedido,
  ContainerEndereco,
  ContainerFormEndereco,
} from "./styles";

export function Checkout() {
  return (
    <ContainerCheckout>
      <ContainerCompletePedido>
        <h4>Complete seu pedido</h4>
        <ContainerEndereco>
          <div className="enderecoEntrega">
            <div className="icone">
              <MapPin size={25} />
            </div>
            <div>
              <span className="spanEndereco">Endereço de Entrega</span>
              <br />
              <span className="spanInforme">
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
            </ContainerFormEndereco>
          </form>
        </ContainerEndereco>
      </ContainerCompletePedido>
      <ContainerCafeSelecionado></ContainerCafeSelecionado>
    </ContainerCheckout>
  );
}
