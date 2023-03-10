import { CreditCard } from "phosphor-react";
import { ContainerButton } from "./styles";

interface ButtonFormaPagamentoProps {
  formaPagamento: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro";
  label: string;
  handleSelecionarFormaPagamento: (string: string) => void;
  actualFormaPagamento: string;
}

export function ButtonFormaPagamento({
  label,
  formaPagamento,
  handleSelecionarFormaPagamento,
  actualFormaPagamento,
}: ButtonFormaPagamentoProps) {
  function selecionarFormaPagamento() {
    handleSelecionarFormaPagamento(formaPagamento);
  }
  return (
    <ContainerButton>
      <button
        value={formaPagamento}
        onClick={selecionarFormaPagamento}
        className={actualFormaPagamento == formaPagamento ? "selected" : ""}
      >
        <span className="icon">
          <CreditCard size={20} />
        </span>
        <span className="label">{label}</span>
      </button>
    </ContainerButton>
  );
}
