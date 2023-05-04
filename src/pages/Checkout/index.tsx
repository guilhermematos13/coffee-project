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
  const { coffees, setCoffees } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();
  const handleSubmitData = (data: any) => {
    if (data.paymentOption) {
      return navigate("/success", {
        state: {
          address: data.address,
          number: data.number,
          neighborhood: data.neighborhood,
          city: data.city,
          UF: data.UF,
          paymentOption: data.paymentOption,
        },
      });
    }
    setError("paymentOption", {
      type: "required",
      message: "Selecione uma forma de pagamento!",
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitData)}>
      <CheckoutContainer>
        <OrderDetailsContainer>
          <TitleForm>Complete seu pedido</TitleForm>
          <AddressDetails register={register} />
          <PaymentDetails
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
          />
        </OrderDetailsContainer>
        <div>
          <TitleForm>Cafés selecionados</TitleForm>

          <CoffeeSelectContainer>
            {coffees.length > 0 ? (
              coffees.map((coffee) => (
                <div key={coffee.id}>
                  <CoffeeItem
                    id={coffee.id}
                    coin={coffee.coin}
                    image={coffee.image}
                    price={Number(coffee.price) * coffee.quantity}
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
