import styled from "styled-components";
import { mixins } from "styles/mixins";

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    width: 22px;
    height: 22px;
  }

  h3 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors["base-text"]};
  }

  @media screen and (max-width: 600px) {
    svg {
      width: 18px;
      height: 18px;
    }

    h3 {
      ${mixins.fonts.textS}
    }

    p {
      ${mixins.fonts.textXS}
      font-weight: 400;
    }
  }
`;

export const Info = styled.div``;
