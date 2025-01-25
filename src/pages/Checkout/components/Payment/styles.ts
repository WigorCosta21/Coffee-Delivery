import styled from "styled-components";
import { mixins } from "styles/mixins";

export const SelectPayment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ErrorMensagem = styled.p`
  color: #ea3f24;
  ${mixins.fonts.textXS}
  margin-top: 0.5rem;
`;
