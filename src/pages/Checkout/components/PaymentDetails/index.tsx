import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Button } from "../Button";
import {
  DescriptionPayment,
  OptionsPaymentButtons,
  PaymentDetailsContainer,
} from "./styles";

export function PaymentDetails() {
  return (
    <PaymentDetailsContainer>
      <DescriptionPayment>
        <CurrencyDollar size={22} />
        <div>
          <label>Pagamento</label>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </DescriptionPayment>
      <OptionsPaymentButtons>
        <Button icon={<CreditCard size={22} />}>cartão de crédito</Button>
        <Button icon={<Bank size={22} />}>cartão de débito</Button>
        <Button icon={<Money size={22} />}>dinheiro</Button>
      </OptionsPaymentButtons>
    </PaymentDetailsContainer>
  );
}
