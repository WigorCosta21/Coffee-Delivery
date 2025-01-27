import { Container } from "@components/Container";

import LogoImg from "/logo.svg";

import * as S from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "@hooks/useCart";

export const Header = () => {
  const theme = useTheme();
  const { cartCount } = useCart();

  return (
    <Container>
      <S.Header>
        <Link to="/">
          <img src={LogoImg} alt="Logo Coffee Delivery" />
        </Link>

        <S.Nav>
          <S.Location>
            <MapPin size={22} color={theme.colors.purple} weight="fill" />
            <span>Brasil</span>
          </S.Location>

          <S.Cart to={`${cartCount > 0 ? "/checkout" : "#"}`}>
            <ShoppingCart
              size={22}
              color={theme.colors["yellow-dark"]}
              weight="fill"
            />
            {cartCount > 0 && <span>{cartCount}</span>}
          </S.Cart>
        </S.Nav>
      </S.Header>
    </Container>
  );
};
