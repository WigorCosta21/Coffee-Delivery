import styled from "styled-components";
import { mixins } from "styles/mixins";

export const Card = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 1.25rem;

  h3 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme.colors["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors["base-label"]};
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
  margin-bottom: 0.75rem;

  @media screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;

  span {
    ${mixins.fonts.tag}
    color: ${(props) => props.theme.colors["yellow-dark"]};
    background-color: ${(props) => props.theme.colors["yellow-light"]};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
  }
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Price = styled.div`
  display: flex;
  ${mixins.fonts.titleM}

  span:first-child {
    ${mixins.fonts.textS}
    line-height: 160%;
    align-self: flex-end;
  }
`;

export const BtnAddCart = styled.button`
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.theme.colors["purple-dark"]};
  border-radius: 6px;
  padding: 0.5rem;
`;
