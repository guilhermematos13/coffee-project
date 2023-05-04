import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  DescriptionPayment,
  OptionsPaymentButtons,
  PaymentDetailsContainer,
  RadioButtonOptions,
} from "./styles";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface PaymentDetailsProps {
  setValue: UseFormSetValue<FieldValues>;
}

export function PaymentDetails({ setValue }: PaymentDetailsProps) {
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
        <RadioButtonOptions
          onClick={() => {
            setValue("paymentOption", "debitCard");
          }}
          value="debitCard"
        >
          <Bank size={16} />
          cartão de débito
        </RadioButtonOptions>
        <RadioButtonOptions
          onClick={() => {
            setValue("paymentOption", "creditCard");
          }}
          value="creditCard"
        >
          <CreditCard size={16} />
          Cartão de crédito
        </RadioButtonOptions>
        <RadioButtonOptions
          onClick={() => {
            setValue("paymentOption", "money");
          }}
          value="money"
        >
          <Money size={16} />
          dinheiro
        </RadioButtonOptions>
      </OptionsPaymentButtons>
    </PaymentDetailsContainer>
  );
}
