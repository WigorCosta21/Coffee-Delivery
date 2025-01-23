import { useTheme } from "styled-components";
import { Package, ShoppingCart, Timer } from "phosphor-react";

import { Container } from "@components/Container";
import { ServiceInfo } from "../ServiceInfo";

import HeroImg from "/images/hero.svg";

import * as S from "./styles";

export const Hero = () => {
  const theme = useTheme();

  return (
    <S.HeroContainer>
      <Container>
        <S.HeroContent>
          <S.HeroLeft>
            <S.HeroInfo>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </S.HeroInfo>

            <S.List>
              <ServiceInfo
                icon={<ShoppingCart size={16} weight="fill" />}
                text="Compra simples e segura"
                backgroundcolor={theme.colors["yellow-dark"]}
              />

              <ServiceInfo
                icon={<Package size={16} weight="fill" />}
                text="Embalagem mantém o café intacto"
                backgroundcolor={theme.colors["base-text"]}
              />

              <ServiceInfo
                icon={<Timer size={16} weight="fill" />}
                text="Entrega rápida e rastreada"
                backgroundcolor={theme.colors.yellow}
              />

              <ServiceInfo
                icon={<ShoppingCart size={16} weight="fill" />}
                text="O café chega fresquinho até você"
                backgroundcolor={theme.colors.purple}
              />
            </S.List>
          </S.HeroLeft>

          <S.HeroRight>
            <img src={HeroImg} alt="Coffee Delivery" />
          </S.HeroRight>
        </S.HeroContent>
      </Container>
    </S.HeroContainer>
  );
};
