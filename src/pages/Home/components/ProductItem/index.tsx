import { QuantitySelector } from "@components/QuantitySelector";
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { priceFormat } from "@utils/priceFormart";

import * as S from "./styles";
type ProductItemProps = {
  item: IProduct;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const theme = useTheme();

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
        <span>{priceFormat(item.price)}</span>
        <div>
          <QuantitySelector />
          <S.BtnAddCart>
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
