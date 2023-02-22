import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  hr {
    border: 1px solid ${(props) => props.theme["base-button"]};
    margin: 1.5rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;
`;

export const ContainerImage = styled.div`
  img {
    width: 4.5rem;
  }
`;

export const ContainerAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .caffeeName {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .containerButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .buttonAmount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    height: 2rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;

    button {
      color: ${(props) => props.theme["purple"]};
      font-size: 1.5rem;
      padding: 0 0.3rem;
      background: transparent;
      border: none;
      outline: none;
    }

    span {
      color: ${(props) => props.theme["base-title"]};
    }
  }

  .buttonRemove {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    border: none;
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }
`;

export const ContainerPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
