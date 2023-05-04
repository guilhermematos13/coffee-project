import { AddressDetails } from "./components/AddressDetails";
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
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { EmptyCoffee } from "./components/EmptyCoffee";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();
  const { coffees } = useContext(CartContext);
  const { register, handleSubmit, setValue } = useForm();
  const handleSubmitData = () => navigate("/success");

  return (
    <form onSubmit={handleSubmit(handleSubmitData)}>
      <CheckoutContainer>
        <OrderDetailsContainer>
          <TitleForm>Complete seu pedido</TitleForm>
          <AddressDetails register={register} />
          <PaymentDetails setValue={setValue} />
        </OrderDetailsContainer>
        <div>
          <TitleForm>Cafés selecionados</TitleForm>

          <CoffeeSelectContainer>
            {coffees.length > 0 ? (
              coffees.map((coffee) => (
                <div key={coffee.id}>
                  <CoffeeItem
                    coin={coffee.coin}
                    image={coffee.image}
                    price={coffee.price}
                    title={coffee.title}
                    quantity={coffee.quantity}
                  />
                  <Line />
                </div>
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
            <ConfirmedOrderButton type="submit">
              Confirma Pedido
            </ConfirmedOrderButton>
          </CoffeeSelectContainer>
        </div>
      </CheckoutContainer>
    </form>
  );
}
