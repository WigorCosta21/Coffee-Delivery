import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTheme } from "styled-components";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { PaymentMethod } from "enums/PaymentMethod";
import { OrderFormData } from "@pages/Checkout/schema";

import { Card } from "../Card";
import { InputRadio } from "../InputRadio";
import { Heading } from "../Heading";

import * as S from "./styles";

interface PaymentProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
}

export const Payment = ({ register, errors }: PaymentProps) => {
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
            {...register("paymentMethod")}
          >
            <CreditCard size={16} color={theme.colors.purple} />
            <span>Cartão de Crédito</span>
          </InputRadio>

          <InputRadio
            isselected={selectedMethod === PaymentMethod.Debit}
            changePayment={() => handleSelect(PaymentMethod.Debit)}
            value={PaymentMethod.Debit}
            {...register("paymentMethod")}
          >
            <Bank size={16} color={theme.colors.purple} />
            <span>Cartão de Débito</span>
          </InputRadio>

          <InputRadio
            isselected={selectedMethod === PaymentMethod.Cash}
            changePayment={() => handleSelect(PaymentMethod.Cash)}
            value={PaymentMethod.Cash}
            {...register("paymentMethod")}
          >
            <Money size={16} color={theme.colors.purple} />
            <span>Dinheiro</span>
          </InputRadio>
        </S.SelectPayment>

        {errors && (
          <S.ErrorMensagem>{errors.paymentMethod?.message}</S.ErrorMensagem>
        )}
      </div>
    </Card>
  );
};
