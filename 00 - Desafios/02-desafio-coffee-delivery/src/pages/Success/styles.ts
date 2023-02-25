import styled from "styled-components";

export const ContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
`;

export const ContainerMensagemPadrao = styled.div`
  h2 {
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.5rem;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ContainerDadosEntrega = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .dadosEntrega {
    padding: 2.5rem;
    border: 1px solid #dbac2c;
    border-radius: 6px 36px 6px 36px;
    min-height: 18rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    .itemDadoEntrega {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;

      .informacao {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      .iconeMapPin {
        background: ${(props) => props.theme["purple"]};
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: ${(props) => props.theme["white"]};
        }
      }

      .iconeTimer {
        background: ${(props) => props.theme["yellow"]};
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: ${(props) => props.theme["white"]};
        }
      }

      .iconeCurrency {
        background: ${(props) => props.theme["yellow-dark"]};
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: ${(props) => props.theme["white"]};
        }
      }
    }
  }

  .imagemEntrega {
    img {
      width: 30rem;
    }
  }
`;
