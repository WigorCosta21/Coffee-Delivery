import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";

import { Card } from "../Card";
import { QuantitySelector } from "@components/QuantitySelector";

import { priceFormat } from "@utils/priceFormart";
import coffees from "data/coffee";

import * as S from "./styles";

export const Cart = () => {
  const theme = useTheme();
  const SHIPPING = 3.5;

  return (
    <Card borderradius="6px 36px 6px 36px">
      <S.CartItem>
        <S.CartContent>
          <img src={coffees[0].image} alt={coffees[0].name} />

          <S.CartInfo>
            <h3>{coffees[0].name}</h3>

            <S.CartControls>
              <QuantitySelector />
              <S.RemoveButton>
                <Trash size={16} color={theme.colors.purple} />
                Remover
              </S.RemoveButton>
            </S.CartControls>
          </S.CartInfo>
        </S.CartContent>

        <span>{priceFormat(coffees[0].price)}</span>
      </S.CartItem>

      <S.CartFooter>
        <S.CartSummary>
          <S.CartSummaryItem>
            Total de itens <span>R$ 19,99</span>
          </S.CartSummaryItem>

          <S.CartSummaryItem>
            Entrega <span>{priceFormat(SHIPPING)}</span>
          </S.CartSummaryItem>

          <S.CartSummaryTotal>
            Total <span>R$ 59,99</span>
          </S.CartSummaryTotal>
        </S.CartSummary>
      </S.CartFooter>
    </Card>
  );
};
