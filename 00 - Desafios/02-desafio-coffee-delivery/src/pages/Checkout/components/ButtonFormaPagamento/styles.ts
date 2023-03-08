import styled from "styled-components";
export const ContainerButton = styled.div`
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0.8rem;
    gap: 0.5rem;
    width: 100%;
    font-size: 0.75rem;
    background: ${(props) => props.theme["base-button"]};
    border: none;
    border-radius: 6px;

    .label {
      color: ${(props) => props.theme["base-text"]};
    }

    .icon {
      color: ${(props) => props.theme["purple-dark"]};
    }

    &:active {
      border: 1px solid ${(props) => props.theme["purple-dark"]};
    }

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      filter: brightness(0.9);
    }
  }

  .selected {
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;
