import styled from "styled-components";

interface CardContainerProps {
  borderradius: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.5rem;
  border-radius: ${(props) => props.borderradius};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
