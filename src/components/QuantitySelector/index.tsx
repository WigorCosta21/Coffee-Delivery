import { useTheme } from "styled-components";
import { Minus, Plus } from "phosphor-react";

import * as S from "./styles";
interface QuantitySelectorProps {
  quantity: number;
  increaseQuantity: () => void;
  decrementQuantity: () => void;
}

export const QuantitySelector = ({
  quantity,
  increaseQuantity,
  decrementQuantity,
}: QuantitySelectorProps) => {
  const theme = useTheme();

  return (
    <S.Controls>
      <button onClick={decrementQuantity}>
        <Minus size={14} color={theme.colors.purple} weight="fill" />
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>
        <Plus size={14} color={theme.colors.purple} weight="fill" />
      </button>
    </S.Controls>
  );
};
