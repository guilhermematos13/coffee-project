import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import {
  DescriptionPayment,
  ErrorContainer,
  OptionsPaymentButtons,
  PaymentDetailsContainer,
  RadioButtonOptions,
} from './styles';
import {
  FieldErrors,
  FieldValues,
  UseFormClearErrors,
  UseFormSetValue,
} from 'react-hook-form';

interface PaymentDetailsProps {
  setValue: UseFormSetValue<FieldValues>;
  errors: any;
  clearErrors: UseFormClearErrors<FieldValues>;
}

export function PaymentDetails({
  setValue,
  errors,
  clearErrors,
}: PaymentDetailsProps) {
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
            setValue('paymentOption', 'debitCard');
            clearErrors('paymentOption');
          }}
          value="debitCard"
        >
          <Bank size={16} />
          cartão de débito
        </RadioButtonOptions>
        <RadioButtonOptions
          onClick={() => {
            setValue('paymentOption', 'creditCard');
            clearErrors('paymentOption');
          }}
          value="creditCard"
        >
          <CreditCard size={16} />
          Cartão de crédito
        </RadioButtonOptions>
        <RadioButtonOptions
          onClick={() => {
            setValue('paymentOption', 'money');
            clearErrors('paymentOption');
          }}
          value="money"
        >
          <Money size={16} />
          dinheiro
        </RadioButtonOptions>
      </OptionsPaymentButtons>
      {errors.paymentOption && (
        <ErrorContainer>{errors.paymentOption.message}</ErrorContainer>
      )}
    </PaymentDetailsContainer>
  );
}
