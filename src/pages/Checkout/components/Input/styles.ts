import styled from "styled-components";
import { mixins } from "styles/mixins";
interface InputProps {
  gridarea: string;
}

export const InputContainer = styled.div<InputProps>`
  grid-area: ${(props) => props.gridarea};

  p {
    color: #ea3f24;
    ${mixins.fonts.textXS}
    margin-top: 0.5rem;
  }
`;

export const Label = styled.label`
  display: flex;
  position: relative;

  input {
    ${mixins.fonts.textS}
    width: 100%;
    border-radius: 4px;
    height: 42px;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.colors["base-input"]};
    color: ${(props) => props.theme.colors["base-text"]};
    border: 1px solid ${(props) => props.theme.colors["base-button"]};
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.colors["base-label"]};
    }
  }

  span {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    color: ${(props) => props.theme.colors["base-label"]};
    ${mixins.fonts.textS}
    font-style: italic;
  }
`;
