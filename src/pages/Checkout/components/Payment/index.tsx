import { useState } from "react";
import { useTheme } from "styled-components";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { PaymentMethod } from "enums/PaymentMethod";

import { Card } from "../Card";
import { InputRadio } from "../InputRadio";
import { Heading } from "../Heading";

import * as S from "./styles";

export const Payment = () => {
  const theme = useTheme();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );

  const handleSelect = (value: PaymentMethod) => setSelectedMethod(value);

  return (
    <Card>
      <Heading
        icon={<CurrencyDollar color={theme.colors.purple} />}
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <div>
        <S.SelectPayment>
          <InputRadio
            isselected={selectedMethod === PaymentMethod.Credit}
            changePayment={() => handleSelect(PaymentMethod.Credit)}
            value={PaymentMethod.Credit}
          >
            <CreditCard size={16} color={theme.colors.purple} />
            <span>Cartão de Crédito</span>
          </InputRadio>

          <InputRadio
            isselected={selectedMethod === PaymentMethod.Debit}
            changePayment={() => handleSelect(PaymentMethod.Debit)}
            value={PaymentMethod.Debit}
          >
            <Bank size={16} color={theme.colors.purple} />
            <span>Cartão de Débito</span>
          </InputRadio>

          <InputRadio
            isselected={selectedMethod === PaymentMethod.Cash}
            changePayment={() => handleSelect(PaymentMethod.Cash)}
            value={PaymentMethod.Cash}
          >
            <Money size={16} color={theme.colors.purple} />
            <span>Dinheiro</span>
          </InputRadio>
        </S.SelectPayment>
      </div>
    </Card>
  );
};
