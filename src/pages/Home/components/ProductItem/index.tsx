import { QuantitySelector } from "@components/QuantitySelector";
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { priceFormat } from "@utils/priceFormart";
import { useCart } from "@hooks/useCart";

import * as S from "./styles";
import { useState } from "react";
type ProductItemProps = {
  item: IProduct;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();
  const { addItemToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItemToCart(item, quantity);
    setQuantity(1);
  };

  return (
    <S.Card>
      <S.Image src={item.image} alt={item.name} />
      <S.Tags>
        {item.type.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </S.Tags>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <S.Controls>
        <S.Price>
          <span>R$</span>
          <span> {priceFormat(item.price)}</span>
        </S.Price>
        <div>
          <QuantitySelector
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decrementQuantity={decrementQuantity}
          />
          <S.BtnAddCart onClick={handleAddToCart}>
            <ShoppingCart
              size={22}
              color={theme.colors["base-card"]}
              weight="fill"
            />
          </S.BtnAddCart>
        </div>
      </S.Controls>
    </S.Card>
  );
};
