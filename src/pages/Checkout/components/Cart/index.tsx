import { useTheme } from "styled-components";
import { Trash } from "phosphor-react";
import toast from "react-hot-toast";
import { useCart } from "@hooks/useCart";
import { priceFormat } from "@utils/priceFormart";

import { Card } from "../Card";
import { QuantitySelector } from "@components/QuantitySelector";

import * as S from "./styles";

export const Cart = () => {
  const theme = useTheme();
  const { cart, cartTotal, removeItemFromCart, updateItemQuantity } = useCart();

  const SHIPPING = 3.5;
  const totalValue = cartTotal + SHIPPING;

  return (
    <Card borderradius="6px 36px 6px 36px">
      {cart.map((item) => {
        const handleRemoveItem = () => {
          toast.success("Item removido com sucesso");
          removeItemFromCart(item.product.id);
        };

        return (
          <S.CartItem key={item.product.id}>
            <S.CartContent>
              <img src={item.product.image} alt={item.product.name} />

              <S.CartInfo>
                <h3>{item.product.name}</h3>

                <S.CartControls>
                  <QuantitySelector
                    quantity={item.quantity}
                    decrementQuantity={() => {
                      updateItemQuantity(item.product.id, "decrement");
                    }}
                    increaseQuantity={() => {
                      updateItemQuantity(item.product.id, "increment");
                    }}
                  />
                  <S.RemoveButton onClick={handleRemoveItem}>
                    <Trash size={16} color={theme.colors.purple} />
                    Remover
                  </S.RemoveButton>
                </S.CartControls>
              </S.CartInfo>
            </S.CartContent>

            <span>R$ {priceFormat(item.totalItemPrice)}</span>
          </S.CartItem>
        );
      })}

      <S.CartFooter>
        <S.CartSummary>
          <S.CartSummaryItem>
            Total de itens <span>R$ {priceFormat(cartTotal)}</span>
          </S.CartSummaryItem>

          <S.CartSummaryItem>
            Entrega<span> R$ {priceFormat(SHIPPING)}</span>
          </S.CartSummaryItem>

          <S.CartSummaryTotal>
            Total <span>R$ {priceFormat(totalValue)}</span>
          </S.CartSummaryTotal>
        </S.CartSummary>
      </S.CartFooter>
    </Card>
  );
};
