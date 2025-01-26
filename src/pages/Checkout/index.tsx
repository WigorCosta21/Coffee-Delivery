import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { OrderFormData, orderSchema } from "./schema";

import { AddressForm } from "./components/AddressForm";
import { Cart } from "./components/Cart";
import { Container } from "@components/Container";
import { Payment } from "./components/Payment";

import * as S from "./styles";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const handleOrder = (data: OrderFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <S.Form onSubmit={handleSubmit(handleOrder)}>
        <S.CheckoutLeft>
          <S.Title>Complete seu pedido</S.Title>
          <S.Content>
            <AddressForm register={register} errors={errors} />
            <Payment register={register} errors={errors} />
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
