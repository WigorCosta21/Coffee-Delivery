import { Container } from "@components/Container";
import { ProductItem } from "../ProductItem";

import * as S from "./styles";
import coffees from "data/coffee";

export const Product = () => {
  return (
    <Container>
      <S.ProductContainer>
        <h2>Nossos cafés</h2>
        <S.ProductContent>
          {coffees.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </S.ProductContent>
      </S.ProductContainer>
    </Container>
  );
};
