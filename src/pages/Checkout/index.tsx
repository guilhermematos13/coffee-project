import { MapPinLine } from "phosphor-react";
import InputMask from "react-input-mask";

import {
  CheckoutContainer,
  OrderField,
  TitleOrder,
  TitleOrderField,
  UserAddress,
  UserDetailsContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer action="">
      <TitleOrder>Complete seu pedido</TitleOrder>
      <UserDetailsContainer>
        <OrderField>
          <TitleOrderField>
            <MapPinLine size={22} />
            <div>
              <label>Endereço de Entrega</label>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleOrderField>
          <UserAddress>
            <InputMask
              className="cep"
              mask="99999-999"
              placeholder="CEP"
            ></InputMask>
            <input className="address" placeholder="Rua"></input>
            <div>
              <input className="number" placeholder="Número"></input>
              <input className="complement" placeholder="Complemento"></input>
            </div>
            <div>
              <input className="neighborhood" placeholder="Bairro"></input>
              <input className="city" placeholder="Cidade"></input>
              <input className="UF" placeholder="UF"></input>
            </div>
          </UserAddress>
        </OrderField>
      </UserDetailsContainer>
    </CheckoutContainer>
  );
}
