import { AddressForm } from "./components/AddressForm";
import { Cart } from "./components/Cart";
import { Container } from "@components/Container";
import { Payment } from "./components/Payment";

import * as S from "./styles";
const Checkout = () => {
  return (
    <Container>
      <S.Form>
        <S.CheckoutLeft>
          <S.Title>Complete seu pedido</S.Title>
          <S.Content>
            <AddressForm />
            <Payment />
          </S.Content>
        </S.CheckoutLeft>

        <S.CheckoutRight>
          <S.Title>Cafés selecionados</S.Title>
          <Cart />
          <S.ButtonSubmit type="submit">Confirmar Pedido</S.ButtonSubmit>
        </S.CheckoutRight>
      </S.Form>
    </Container>
  );
};

export default Checkout;
