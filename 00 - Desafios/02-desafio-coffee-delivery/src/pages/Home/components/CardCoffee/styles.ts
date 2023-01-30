import styled from "styled-components";

export const ContainerCardCoffee = styled.div`
  max-width: 16rem;
  min-height: 17rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  text-align: center;

  img {
    margin-top: -2rem;
  }

  h2 {
    margin: 0.5rem 0;
  }

  .containerTipo {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
  }

  .tipo {
    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};
    padding: 0.5rem;
    border-radius: 15px;
    font-weight: bold;
    font-size: 0.8rem;
  }

  .info {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const PriceAmount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 2rem;

  .price {
    color: ${(props) => props.theme["base-text"]};

    span {
      font-weight: bold;
      font-size: 1.6rem;
      font-family: "Baloo 2";
    }
  }

  .amount {
    background: ${(props) => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    button {
      background: transparent;
      border: none;
      outline: none;
      font-size: inherit;
      color: ${(props) => props.theme["purple-dark"]};

      transition: scale 0.09s;

      &:hover {
        cursor: pointer;
      }

      &:active {
        scale: 0.9;
      }
    }
  }

  .cart {
    button {
      padding: 0.5rem;
      background: ${(props) => props.theme["purple-dark"]};
      border: none;
      color: ${(props) => props.theme["white"]};
      border-radius: 6px;

      transition: background-color 0.2s;

      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme["purple"]};
      }

      &:active {
        scale: 0.95;
      }
    }
  }
`;
