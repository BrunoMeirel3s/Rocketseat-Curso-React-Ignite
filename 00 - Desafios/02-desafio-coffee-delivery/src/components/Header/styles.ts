import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  a:active,
  a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
    box-shadow: none;
  }
`;

export const ContainerLocationCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Cart = styled.div`
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    cursor: pointer;
  }

  div {
    position: absolute;
    top: -8px;
    right: -8px;

    z-index: 4;
    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
    padding: 0.2rem 0.4rem;
    border-radius: 999px;
    font-size: 0.8rem;
  }
`;

export const Location = styled.div`
  color: ${(props) => props.theme["purple-dark"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  background: ${(props) => props.theme["purple-light"]};
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;
