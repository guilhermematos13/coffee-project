import {
  Container,
  ContentContainer,
  FirstIcon,
  IconStyled,
  UserData,
} from "./styles";
import SuccessImage from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";

export function Success() {
  const location = useLocation();
  const state = location.state;

  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <ContentContainer>
        <UserData>
          <FirstIcon>
            <IconStyled variant="purple">
              <MapPin weight="fill" />
            </IconStyled>
            <p>
              Entrega em{" "}
              <b>
                {state?.address}, {state?.number}
              </b>
              <br />
              {state?.neighborhood} - {state?.city}, {state?.UF}
            </p>
          </FirstIcon>
          <div>
            <IconStyled variant="yellow">
              <Timer weight="fill" />
            </IconStyled>
            <p>
              Previsão de entrega
              <br />
              <b>20 min - 30 min</b>
            </p>
          </div>
          <div>
            <IconStyled variant="yellowDark">
              <CurrencyDollar weight="fill" />
            </IconStyled>
            <p>
              Pagamento na entrega
              <br />
              <b>
                {state?.paymentOption === "debitCard" && "Cartão de Débito"}
                {state?.paymentOption === "creditCard" && "Cartão de Crédito"}
                {state?.paymentOption === "money" && "Dinheiro"}
              </b>
            </p>
          </div>
        </UserData>
        <div>
          <img src={SuccessImage} />
        </div>
      </ContentContainer>
    </Container>
  );
}
