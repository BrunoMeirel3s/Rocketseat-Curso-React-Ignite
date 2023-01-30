import styled from "styled-components";

export const ContainerHome = styled.main``;

export const ContainerCoffeeList = styled.div`
  h1,
  h2,
  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2";
  }
`;

export const ContentCoffeeList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1.8rem;
  flex-wrap: wrap;
  justify-content: center;
`;
