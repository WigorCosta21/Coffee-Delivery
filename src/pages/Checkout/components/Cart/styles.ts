import styled from "styled-components";
import { mixins } from "styles/mixins";

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 2rem 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};
  margin-bottom: 1.2rem;

  span {
    ${mixins.fonts.textM}
    font-weight: bold;
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const CartContent = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const CartInfo = styled.div`
  h3 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    h3 {
      ${mixins.fonts.textS}
    }
  }
`;

export const CartControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const RemoveButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  ${mixins.fonts.buttonM}
  color: ${(props) => props.theme.colors["base-text"]};
  background-color: ${(props) => props.theme.colors["base-button"]};
  border-radius: 6px;
  padding: 0.5rem;

  @media screen and (max-width: 430px) {
    justify-content: space-around;
  }
`;

export const CartFooter = styled.footer`
  margin: 1.5rem 0;
`;

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CartSummaryItem = styled.p`
  ${mixins.fonts.textS}
  color: ${(props) => props.theme.colors["base-text"]};

  span {
    ${mixins.fonts.textM}
  }
`;

export const CartSummaryTotal = styled.p`
  ${mixins.fonts.textL}
  color: ${(props) => props.theme.colors["base-text"]};
  font-weight: bold;
`;
