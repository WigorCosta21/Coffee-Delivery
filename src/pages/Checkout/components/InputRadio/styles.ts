import styled from "styled-components";
import { mixins } from "styles/mixins";

export const Label = styled.label<{ isselected: boolean }>`
  width: 178px;
  height: 51px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.isselected
      ? props.theme.colors["purple-light"]
      : props.theme.colors["base-button"]};
  border-color: ${(props) =>
    props.isselected
      ? props.theme.colors.purple
      : props.theme.colors["base-button"]};

  &:hover {
    background-color: ${(props) => props.theme.colors["base-hover"]};
  }

  input {
    display: none;
  }

  span {
    ${mixins.fonts.buttonM}
    color: ${(props) => props.theme.colors["base-text"]};
    text-transform: uppercase;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
