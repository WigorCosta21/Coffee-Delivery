import styled from "styled-components";
import { mixins } from "styles/mixins";

export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Title = styled.h2`
  ${mixins.fonts.titleL}
  color: ${(props) => props.theme.colors["yellow-dark"]};
  margin-bottom: 0.25rem;
`;

export const Caption = styled.p`
  ${mixins.fonts.textL}
  color: ${(props) => props.theme.colors["base-subtitle"]};
  margin-bottom: 2.5rem;
`;
