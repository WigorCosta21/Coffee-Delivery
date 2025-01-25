import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 1rem 0.75rem;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "street street street"
      "number . ."
      "neighborhood neighborhood neighborhood"
      "cep fullAddress fullAddress"
      "city city state";
  }

  @media screen and (max-width: 550px) {
    grid-template-areas:
      "street street street"
      "number . ."
      "neighborhood neighborhood neighborhood"
      "cep cep cep"
      "fullAddress fullAddress fullAddress"
      "city city state";
  }
`;
