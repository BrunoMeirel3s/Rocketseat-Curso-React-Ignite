import { CreditCard } from "phosphor-react";
import { ContainerButton } from "./styles";

interface ButtonFormaPagamentoProps {
  formaPagamento: "credito" | "debito" | "dinheiro";
  label: string;
}

export function ButtonFormaPagamento({ label }: ButtonFormaPagamentoProps) {
  return (
    <ContainerButton>
      <button>
        <span className="icon">
          <CreditCard size={20} />
        </span>
        <span className="label">{label}</span>
      </button>
    </ContainerButton>
  );
}
