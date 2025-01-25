import styled from "styled-components";
import { mixins } from "styles/mixins";

export const ProductContainer = styled.main`
  padding: 2rem 0;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
    margin-bottom: 3.375rem;
  }

  @media screen and (max-width: 600px) {
    h2 {
      ${mixins.fonts.titleM}
    }
  }
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
