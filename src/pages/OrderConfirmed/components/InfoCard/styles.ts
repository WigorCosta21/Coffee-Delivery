import styled from "styled-components";
import { mixins } from "styles/mixins";

export const Card = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.colors.yellow}, ${props.theme.colors.purple})`};
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background-color: white;
  border-radius: 6px 36px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    p {
      color: ${(props) => props.theme.colors["base-text"]};
      ${mixins.fonts.textM}
    }
  }
`;

interface IconProps {
  backgroundcolor: string;
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  padding: 0.5rem;
  background-color: ${(props) => props.backgroundcolor};

  svg {
    color: ${(props) => props.theme.colors.background};
  }

  position: relative;
`;
