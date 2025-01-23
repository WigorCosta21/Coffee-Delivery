import styled from "styled-components";
import { mixins } from "styles/mixins";

type ServiceContainerProps = {
  backgroundcolor: string;
};

export const ServiceContainer = styled.div<ServiceContainerProps>`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 100%;
    background-color: ${(props) => props.backgroundcolor};

    svg {
      color: ${(props) => props.theme.colors.background};
    }
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors["base-text"]};
  }

  @media screen and (max-width: 768px) {
    span {
      ${mixins.fonts.textS}
    }
  }
`;
