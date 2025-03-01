import { useTheme } from "styled-components";
import { MapPinLine } from "phosphor-react";

import { Card } from "../Card";
import { Heading } from "../Heading";
import { Input } from "../Input";

import * as S from "./styles";

export const Form = () => {
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
          <Input placeholder="CEP" gridarea="cep" />
          <Input placeholder="Rua" gridarea="street" />
          <Input placeholder="Número" gridarea="number" />
          <Input placeholder="Complemento" gridarea="fullAddress" optional />
          <Input placeholder="Bairro" gridarea="neighborhood" />
          <Input placeholder="Cidade" gridarea="city" />
          <Input placeholder="UF" gridarea="state" />
        </S.FormContainer>
      </Card>
    </>
  );
};
