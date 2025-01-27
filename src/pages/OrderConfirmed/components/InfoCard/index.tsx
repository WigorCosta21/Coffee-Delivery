import { useTheme } from "styled-components";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import * as S from "./styles";
import { useOrder } from "@hooks/useOrder";
import { PaymentMethod } from "enums/PaymentMethod";

export const InfoCard = () => {
  const theme = useTheme();
  const { orderData } = useOrder();

  const translatePaymentMethod = (method: PaymentMethod) => {
    switch (method) {
      case PaymentMethod.Credit:
        return "Crédito";
      case PaymentMethod.Debit:
        return "Débito";
      case PaymentMethod.Cash:
        return "Dinheiro";
      default:
        return method; // Retorna o próprio valor se não encontrar um mapeamento
    }
  };

  return (
    <S.Card>
      <S.InfoContent>
        <S.Info>
          <S.Icon backgroundcolor={theme.colors.purple}>
            <MapPin size={16} weight="fill" />
          </S.Icon>

          <div>
            <p>
              Entrega em{" "}
              <strong>
                {orderData?.street}, {orderData?.number}
              </strong>
            </p>
            <p>
              {orderData?.neighborhood} - {orderData?.city}, {orderData?.state}
            </p>
          </div>
        </S.Info>

        <S.Info>
          <S.Icon backgroundcolor={theme.colors.yellow}>
            <Timer size={16} weight="fill" />
          </S.Icon>

          <div>
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>{" "}
            </p>
          </div>
        </S.Info>

        <S.Info>
          <S.Icon backgroundcolor={theme.colors["yellow-dark"]}>
            <CurrencyDollar size={16} />
          </S.Icon>

          <div>
            <p>Pagamento na entrega</p>
            <p>
              <strong>
                {translatePaymentMethod(
                  orderData?.paymentMethod as PaymentMethod
                )}
              </strong>
            </p>
          </div>
        </S.Info>
      </S.InfoContent>
    </S.Card>
  );
};
