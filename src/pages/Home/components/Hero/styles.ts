import styled from "styled-components";
import { mixins } from "styles/mixins";

export const HeroContainer = styled.div`
  background-image: url("/images/hero-bg.svg");
  padding: 5.875rem 0 6.75rem;

  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const HeroLeft = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4.125rem;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors["base-title"]};
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  @media screen and (max-width: 1024px) {
    h1 {
      ${mixins.fonts.titleL}
    }

    p {
      ${mixins.fonts.textM}
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;

    h1 {
      ${mixins.fonts.titleM}
    }

    p {
      ${mixins.fonts.textS}
    }
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.25rem 2.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    align-self: flex-start;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
`;
