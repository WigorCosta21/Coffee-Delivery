import { useTheme } from "styled-components";
import * as S from "./styles";
import { Minus, Plus } from "phosphor-react";

export const QuantitySelector = () => {
  const theme = useTheme();

  return (
    <S.Controls>
      <button>
        <Minus size={14} color={theme.colors.purple} weight="fill" />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} color={theme.colors.purple} weight="fill" />
      </button>
    </S.Controls>
  );
};
