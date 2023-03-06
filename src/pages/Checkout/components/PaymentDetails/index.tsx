import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Button } from "../Button";
import {
  DescriptionPayment,
  OptionsPaymentButtons,
  PaymentDetailsContainer,
  RadioButtonOptions,
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
        <RadioButtonOptions value="creditCard">
          <CreditCard size={16} />
          Cartão de crédito
        </RadioButtonOptions>
        <RadioButtonOptions value="debitCard">
          <Bank size={16} />
          cartão de débito
        </RadioButtonOptions>
        <RadioButtonOptions value="money">
          <Money size={16} />
          dinheiro
        </RadioButtonOptions>
      </OptionsPaymentButtons>
    </PaymentDetailsContainer>
  );
}
