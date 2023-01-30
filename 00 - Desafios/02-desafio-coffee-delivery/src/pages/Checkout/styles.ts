import styled from "styled-components";
export const ContainerCheckout = styled.div`
  margin-top: 2rem;
`;

export const ContentCheckout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContainerCompletePedido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  max-width: 40rem;

  h4 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2";
  }
`;

export const ContainerEndereco = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  .enderecoEntrega {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .icone {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .spanEndereco {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.2rem;
  }

  .spanInforme {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ContainerFormEndereco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.2rem;

  input {
    padding: 1rem;
    height: 2.6rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
  }
`;

export const ContainerPagamento = styled.div`
  padding: 1rem;
`;

export const ContainerCafeSelecionado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  max-width: 28rem;

  h4 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2";
  }
`;

export const ContainerConfirmarPedido = styled.div`
  padding: 1rem;
`;
