import styled from "styled-components";

export const ContainerIntro = styled.div`
  width: calc(100%- 8rem);
  padding: 5rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
`;

export const ContainerImage = styled.div`
  img {
    width: 22.5rem;
  }
`;

export const Title = styled.span`
  font-family: "Baloo 2";
  font-weight: bolder;
  font-size: 2.4rem;
  color: ${(props) => props.theme["base-title"]};
  line-height: 1.3;
`;

export const SubTitle = styled.span`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const InfosDelivery = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  color: ${(props) => props.theme["base-text"]};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      border-radius: 999px;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &.yellowDark{
        color: ${(props) => props.theme["white"]}; 
        background: ${(props) => props.theme["yellow-dark"]}; 
      }

      &.yellow{
        color: ${(props) => props.theme["white"]}; 
        background: ${(props) => props.theme["yellow"]}; 
      }

      &.grayDark{
        color: ${(props) => props.theme["white"]}; 
        background: ${(props) => props.theme["base-text"]}; 
      }

      &.purple{
        color: ${(props) => props.theme["white"]}; 
        background: ${(props) => props.theme["purple"]}; 
      }
    }
  }
`;
