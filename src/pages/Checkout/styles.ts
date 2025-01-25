import styled from "styled-components";
import { mixins } from "styles/mixins";

export const Form = styled.form`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  ${mixins.fonts.titleXS}
  color: ${(props) => props.theme.colors["base-subtitle"]};
  margin-bottom: 1rem;
`;

export const CheckoutLeft = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckoutRight = styled.div`
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  margin-top: 2.5rem;
  padding: 0.75rem 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  ${mixins.fonts.buttonG}
`;
