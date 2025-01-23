import { Container } from "@components/Container";

import LogoImg from "/logo.svg";

import * as S from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  const theme = useTheme();

  return (
    <Container>
      <S.Header>
        <Link to="/">
          <img src={LogoImg} alt="Logo Coffee Delivery" />
        </Link>

        <S.Nav>
          <S.Location>
            <MapPin size={22} color={theme.colors.purple} weight="fill" />
            <span>Porto Alegre, RS</span>
          </S.Location>

          <S.Cart to={"/"}>
            <ShoppingCart
              size={22}
              color={theme.colors["yellow-dark"]}
              weight="fill"
            />
            <span>1</span>
          </S.Cart>
        </S.Nav>
      </S.Header>
    </Container>
  );
};
