import { MapPinLine } from 'phosphor-react';
import { Input } from '../Input';
import { InputSuffix } from '../InputSuffix';
import {
  AddressDetailsContainer,
  DescriptionTitle,
  FormContainer,
} from './styles';
import { InputUF } from '../InputUF';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface AddressDetailsProps {
  register: UseFormRegister<FieldValues>;
}

export function AddressDetails({ register }: AddressDetailsProps) {
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
          <Input
            id="CEP"
            {...register('CEP', { required: true })}
            mask
            placeholder="CEP"
          />
        </div>
        <Input {...register('address', { required: true })} placeholder="Rua" />
        <div className="numberAndComplement">
          <Input
            {...register('number', { required: true })}
            placeholder="Número"
          />
          <InputSuffix
            {...register('complements')}
            suffix="Opcional"
            placeholder="Complemento"
          />
        </div>
        <div className="addressOtherDetails">
          <Input
            {...register('neighborhood', { required: true })}
            placeholder="Bairro"
          />
          <Input
            placeholder="Cidade"
            {...register('city', { required: true })}
          />
          <InputUF
            type="text"
            {...register('UF', {
              required: true,
              pattern: /[A-Za-z]{2}/,
            })}
            maxLength={2}
            placeholder="UF"
          />
        </div>
      </FormContainer>
    </AddressDetailsContainer>
  );
}
