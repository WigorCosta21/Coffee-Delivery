import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";

import { Card } from "../Card";
import { QuantitySelector } from "@components/QuantitySelector";

import { priceFormat } from "@utils/priceFormart";

import * as S from "./styles";
import { useCart } from "@hooks/useCart";

export const Cart = () => {
  const theme = useTheme();
  const { cart, removeItemFromCart } = useCart();

  const SHIPPING = 3.5;

  return (
    <Card borderradius="6px 36px 6px 36px">
      {cart.map((item) => (
        <S.CartItem key={item.product.id}>
          <S.CartContent>
            <img src={item.product.image} alt={item.product.name} />

            <S.CartInfo>
              <h3>{item.product.name}</h3>

              <S.CartControls>
                <QuantitySelector
                  quantity={item.cartItemsCount}
                  decrementQuantity={() => {}}
                  increaseQuantity={() => {}}
                />
                <S.RemoveButton
                  onClick={() => removeItemFromCart(item.product.id)}
                >
                  <Trash size={16} color={theme.colors.purple} />
                  Remover
                </S.RemoveButton>
              </S.CartControls>
            </S.CartInfo>
          </S.CartContent>

          <span>{priceFormat(item.product.price)}</span>
        </S.CartItem>
      ))}

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
