import { AddressDetails } from "./components/AddressDetails";
import ExpressoTradicional from "../../data/assets/expresso.svg";
import Latte from "../../data/assets/latte.svg";
import { CoffeeItem } from "./components/CoffeeItem";
import { PaymentDetails } from "./components/PaymentDetails";
import {
  CheckoutContainer,
  CoffeeSelectContainer,
  LineTest,
  OrderDetailsContainer,
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
      <div>
        <TitleForm>Cafés selecionados</TitleForm>
        <CoffeeSelectContainer>
          <CoffeeItem
            image={ExpressoTradicional}
            price="R$ 9,90"
            title="Expresso Tradicional"
          />
          <LineTest></LineTest>
          <CoffeeItem image={Latte} price="R$ 19,90" title="Latte" />
        </CoffeeSelectContainer>
      </div>
    </CheckoutContainer>
  );
}
