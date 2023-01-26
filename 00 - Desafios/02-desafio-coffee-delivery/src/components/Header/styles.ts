import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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

  &:hover {
    cursor: pointer;
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

  &:hover{
    cursor: pointer;
  }
`;
