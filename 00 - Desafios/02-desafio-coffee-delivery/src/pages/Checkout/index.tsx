import { CurrencyDollar, MapPin } from "phosphor-react";
import { ButtonFormaPagamento } from "./components/ButtonFormaPagamento";
import { ItemSelectedCoffee } from "./components/ItemSelectedCoffee";
import { coffees } from "../../mocks/coffeeList";
import {
  ContainerCafeSelecionado,
  ContainerCheckout,
  ContainerCompletePedido,
  ContainerConfirmarPedido,
  ContainerEndereco,
  ContainerFormEndereco,
  ContainerPagamento,
  ContainerTotais,
} from "./styles";

import { useContext, useState } from "react";
import { CarrinhoCompraContext } from "../../contexts/CarrinhoCompraContext";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SchemaAddreeDelivery = yup.object().shape({
  cep: yup
    .string()
    .required("")
    .min(8, "Informe um CEP válido para prosseguir"),
  rua: yup.string().required("").min(10, "Informe a rua"),
  numero: yup.string().required("").min(1, "Informe o número"),
  bairro: yup.string().required("").min(4, "Informe o bairro"),
  cidade: yup.string().required("").min(4, "Informe a cidade"),
  uf: yup
    .string()
    .required("")
    .min(2, "Informe seu estado")
    .max(2, "Informe somente os 2 dígitos do estado"),
});

type FormEnderecoEntrega = {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento?: string;
};

export function Checkout() {
  const {
    selectedCoffees,
    totals,
    addRemoveCoffeeToCart,
    increaseAmountOfCoffee,
    decreaseAmountOfCoffee,
    saveOrder,
  } = useContext(CarrinhoCompraContext);

  const [formaPagamento, setFormaPagamento] = useState("");
  const [formaPagamentoSelecionada, setFormaPagamentoSelecionada] =
    useState(true);
  const { handleSubmit, register, watch, formState } =
    useForm<FormEnderecoEntrega>({
      resolver: yupResolver(SchemaAddreeDelivery),
    });

  const { errors } = formState;

  function handleSelecionarFormaPagamento(formaPagamento: string) {
    setFormaPagamentoSelecionada(true);
    setFormaPagamento(formaPagamento);
  }

  const navigate = useNavigate();

  const onSubmit = (data: FormEnderecoEntrega) => {
    let endereco = {
      rua: data.rua,
      cep: data.cep,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      uf: data.uf,
      cidade: data.cidade,
    };

    let coffees = selectedCoffees;
    let total = totals;
    let formPagamento = formaPagamento;

    if (formaPagamento != "") {
      saveOrder(endereco, coffees, total, formPagamento);
      navigate("/success", { replace: true });
    } else {
      setFormaPagamentoSelecionada(false);
    }
  };

  watch(() => {});

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="FormularioEnderecoEntrega"
          >
            <ContainerFormEndereco>
              <input
                type="text"
                placeholder="CEP"
                style={{ maxWidth: "12.5rem" }}
                className={errors && errors?.cep ? "inputInvalid" : ""}
                {...register("cep")}
              />
              <input
                type="text"
                placeholder="Rua"
                style={{ maxWidth: "100%" }}
                className={errors && errors?.rua ? "inputInvalid" : ""}
                {...register("rua")}
              />

              <div className="containerTwoInputs">
                <input
                  type="text"
                  placeholder="Número"
                  className={errors && errors?.numero ? "inputInvalid" : ""}
                  {...register("numero")}
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register("complemento")}
                />
              </div>
              <div className="containerThreeInputs">
                <input
                  type="text"
                  placeholder="Bairro"
                  className={errors && errors?.bairro ? "inputInvalid" : ""}
                  {...register("bairro")}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className={errors && errors?.cidade ? "inputInvalid" : ""}
                  {...register("cidade")}
                />
                <input
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  className={errors && errors?.uf ? "inputInvalid" : ""}
                  {...register("uf")}
                />
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
              formaPagamento="Cartão de Crédito"
              label="CARTÃO DE CRÉDITO"
              handleSelecionarFormaPagamento={handleSelecionarFormaPagamento}
              actualFormaPagamento={formaPagamento}
            />
            <ButtonFormaPagamento
              formaPagamento="Cartão de Débito"
              label="CARTÃO DE DÉBITO"
              handleSelecionarFormaPagamento={handleSelecionarFormaPagamento}
              actualFormaPagamento={formaPagamento}
            />
            <ButtonFormaPagamento
              formaPagamento="Dinheiro"
              label="DINHEIRO"
              handleSelecionarFormaPagamento={handleSelecionarFormaPagamento}
              actualFormaPagamento={formaPagamento}
            />
          </div>
          {!formaPagamentoSelecionada && (
            <div className="mensagemErroFormaPagamento">
              <span>Selecione uma das formas de pagamento</span>
            </div>
          )}
        </ContainerPagamento>
      </ContainerCompletePedido>
      <ContainerCafeSelecionado>
        <h4>Cafés selecionados</h4>
        <ContainerConfirmarPedido>
          {selectedCoffees.map((coffee) => {
            return (
              <ItemSelectedCoffee
                key={coffee.id}
                imagem={coffee.id}
                quantidade={coffee.amount}
                nome={coffee.name}
                preco={coffee.price}
                addRemoveCoffeeToCart={addRemoveCoffeeToCart}
                increaseAmountOfCoffee={increaseAmountOfCoffee}
                decreaseAmountOfCoffee={decreaseAmountOfCoffee}
              />
            );
          })}
          <ContainerTotais>
            <div className="totalizadores">
              <div>
                <span>Total de itens</span>
                <span>
                  {totals?.totalCoffeesPrice?.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div>
                <span>Entrega</span>
                <span>
                  {totals?.totalDeliveryPrice?.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div id="totalFinal">
                <span>Total</span>
                <span>
                  {(
                    totals?.totalCoffeesPrice + totals.totalDeliveryPrice
                  )?.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
            <div className="botaoConfirmar">
              <button type="submit" form="FormularioEnderecoEntrega">
                CONFIRMAR PEDIDO
              </button>
            </div>
          </ContainerTotais>
        </ContainerConfirmarPedido>
      </ContainerCafeSelecionado>
    </ContainerCheckout>
  );
}
