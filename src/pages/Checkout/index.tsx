import { AddressDetails } from "./components/AddressDetails";
import ExpressoTradicional from "../../data/assets/expresso.svg";
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
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { EmptyCoffee } from "./components/EmptyCoffee";

export function Checkout() {
  const { coffees } = useContext(CartContext);

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
          {coffees.length > 0 ? (
            coffees.map((coffee) => (
              <>
                <CoffeeItem
                  key={coffee.id}
                  coin={coffee.coin}
                  image={coffee.image}
                  price={coffee.price}
                  title={coffee.title}
                  quantity={coffee.quantity}
                />
                <Line />
              </>
            ))
          ) : (
            <EmptyCoffee />
          )}
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
