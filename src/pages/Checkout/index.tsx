import { AddressDetails } from "./components/AddressDetails";
import { CheckoutContainer, OrderDetailsContainer, TitleForm } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderDetailsContainer>
        <TitleForm>Complete seu pedido</TitleForm>
        <AddressDetails />
      </OrderDetailsContainer>
      {/* <TitleForm>Cafés selecionados</TitleForm> */}
    </CheckoutContainer>
  );
}
