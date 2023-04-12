import { AddressDetails } from "./components/AddressDetails";
import ExpressoTradicional from "../../data/assets/expresso.svg";
import Latte from "../../data/assets/latte.svg";
import { CoffeeItem } from "./components/CoffeeItem";
import { PaymentDetails } from "./components/PaymentDetails";
import {
  CheckoutContainer,
  CoffeeSelectContainer,
  ConfirmedOrderButton,
  Line,
  OrderDetailsContainer,
  PaymentDataContainer,
  TitleForm,
  ValueDetailsTitle,
  ValuesDetailsPrice,
} from "./styles";
import { Link } from "react-router-dom";

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
          <Line></Line>
          <CoffeeItem image={Latte} price="R$ 19,90" title="Latte" />
          <Line></Line>
          <PaymentDataContainer>
            <div className="linePayment">
              <ValueDetailsTitle>Total de itens</ValueDetailsTitle>
              <ValuesDetailsPrice>R$ 29,70</ValuesDetailsPrice>
            </div>
            <div className="linePayment">
              <ValueDetailsTitle>Entrega</ValueDetailsTitle>
              <ValuesDetailsPrice>R$ 3,50</ValuesDetailsPrice>
            </div>
            <div className="linePayment">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </PaymentDataContainer>
          <Link to="/success">
            <ConfirmedOrderButton>Confirma Pedido</ConfirmedOrderButton>
          </Link>
        </CoffeeSelectContainer>
      </div>
    </CheckoutContainer>
  );
}
