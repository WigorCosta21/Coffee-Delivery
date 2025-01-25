import styled from "styled-components";

export const Controls = styled.div`
  width: 72px;
  height: 38px;
  background-color: ${(props) => props.theme.colors["base-button"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  @media screen and (max-width: 430px) {
    width: 100%;
    justify-content: space-around;
    padding: 0.5rem;
  }
`;
