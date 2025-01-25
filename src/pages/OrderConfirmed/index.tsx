import { Container } from "@components/Container";
import { InfoCard } from "./components/InfoCard";

import * as S from "./styles";

import DeliveryImg from "/images/delivery.svg";

const OrderConfirmed = () => {
  return (
    <Container>
      <S.OrderContainer>
        <div>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Caption>
            Agora é só aguardar que logo o café chegará até você
          </S.Caption>

          <InfoCard />
        </div>

        <div>
          <img src={DeliveryImg} alt="" />
        </div>
      </S.OrderContainer>
    </Container>
  );
};

export default OrderConfirmed;
