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

  .headerForm {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .iconYellow {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .iconPurple {
    color: ${(props) => props.theme["purple-dark"]};
  }

  .titleForm {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.2rem;
  }

  .subtitleForm {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ContainerEndereco = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
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
    color: ${(props) => props.theme["base-text"]};
  }

  .containerTwoInputs {
    display: grid;
    grid-template-columns: 12.5rem 1fr;
    gap: 1rem;
  }

  .containerThreeInputs {
    display: grid;
    grid-template-columns: 12.5rem 1fr 4rem;
    gap: 1rem;
  }
`;

export const ContainerPagamento = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  .containerOpcoesPagamento {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }
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
