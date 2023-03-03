import { AddressDetails } from "./components/AddressDetails";
import {
  CheckoutContainer,
  OrderDetailsContainer,
  PaymentDetails,
  TitleForm,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderDetailsContainer>
        <TitleForm>Complete seu pedido</TitleForm>
        <AddressDetails />
        <PaymentDetails />
      </OrderDetailsContainer>
      <TitleForm>Cafés selecionados</TitleForm>
    </CheckoutContainer>
  );
}
