import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
  ChartBar,
} from "@phosphor-icons/react";

import { priceFormatter } from "../../utils/formatter";
import {
  BalanceContent,
  BottomContent,
  BottomLink,
  TopContent,
} from "./styles";

export function BalanceCard() {
  return (
    <BalanceContent>
      <TopContent>
        <ChartBar size={72} />
        <header>
          <span>Entradas</span>
          <strong>{priceFormatter.format(10000)}</strong>
        </header>

        <ArrowCircleUp size={32} color="#00b37e" />
      </TopContent>
      <BottomContent>
        <BottomLink>Teste</BottomLink>
      </BottomContent>
    </BalanceContent>
  );
}
