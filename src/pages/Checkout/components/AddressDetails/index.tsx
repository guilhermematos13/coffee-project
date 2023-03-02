import { MapPinLine } from "phosphor-react";
import { Input } from "../Input";
import { InputSuffix } from "../InputSuffix";
import {
  AddressDetailsContainer,
  DescriptionTitle,
  FormContainer,
} from "./styles";

export function AddressDetails() {
  return (
    <AddressDetailsContainer>
      <DescriptionTitle>
        <MapPinLine size={22} />
        <div>
          <label>Endereço de Entrega</label>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </DescriptionTitle>
      <FormContainer>
        <div className="cepInput">
          <Input mask placeholder="CEP"></Input>
        </div>
        <Input placeholder="Rua" />
        <div className="numberAndComplement">
          <Input placeholder="Número" />
          <InputSuffix suffix="Opcional" placeholder="Complemento" />
        </div>
        <div className="addressOtherDetails">
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
        </div>
      </FormContainer>
    </AddressDetailsContainer>
  );
}
