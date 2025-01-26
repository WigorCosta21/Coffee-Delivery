import { useTheme } from "styled-components";
import { MapPinLine } from "phosphor-react";

import { Card } from "../Card";
import { Heading } from "../Heading";
import { Input } from "../Input";

import * as S from "./styles";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { OrderFormData } from "@pages/Checkout/schema";

interface AddressFormProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
}

export const AddressForm = ({ register, errors }: AddressFormProps) => {
  const theme = useTheme();

  return (
    <>
      <Card>
        <Heading
          icon={<MapPinLine color={theme.colors["yellow-dark"]} />}
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
        />
        <S.FormContainer>
          <Input
            placeholder="CEP"
            gridarea="cep"
            {...register("cep")}
            errors={errors.cep?.message}
          />
          <Input
            placeholder="Rua"
            gridarea="street"
            {...register("street")}
            errors={errors.street?.message}
          />
          <Input
            placeholder="Número"
            gridarea="number"
            {...register("number")}
            errors={errors.number?.message}
          />
          <Input
            placeholder="Complemento"
            gridarea="fullAddress"
            {...register("fullAddress")}
            errors={errors.fullAddress?.message}
          />
          <Input
            placeholder="Bairro"
            gridarea="neighborhood"
            {...register("neighborhood")}
            errors={errors.neighborhood?.message}
          />
          <Input
            placeholder="Cidade"
            gridarea="city"
            {...register("city")}
            errors={errors.city?.message}
          />
          <Input
            placeholder="UF"
            gridarea="state"
            {...register("state")}
            errors={errors.state?.message}
          />
        </S.FormContainer>
      </Card>
    </>
  );
};
