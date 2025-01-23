import { Link } from "react-router-dom";
import styled from "styled-components";
import { mixins } from "styles/mixins";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors["purple-light"]};
  border-radius: 6px;

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors["purple-dark"]};
  }
`;

export const Cart = styled(Link)`
  height: 38px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors["yellow-light"]};
  border-radius: 6px;
  position: relative;

  span {
    position: absolute;
    top: -10px;
    font-weight: bold;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${(props) => props.theme.colors["yellow-dark"]};
    color: ${(props) => props.theme.colors.white};
    ${mixins.fonts.textS}
  }
`;
