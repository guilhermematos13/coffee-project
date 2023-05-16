import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const PaymentDetailsContainer = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
  margin-top: 0.75rem;
`;

export const DescriptionPayment = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
    @media screen and (max-width: 420px) {
      width: 50px;
      height: 50px;
    }
  }

  label {
    color: ${(props) => props.theme.baseSubTitle};

    @media screen and (max-width: 420px) {
      font-size: 0.75rem;
    }
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseText};

    @media screen and (max-width: 420px) {
      font-size: 0.6rem;
    }
  }
`;

export const OptionsPaymentButtons = styled(RadioGroup.Root)`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RadioButtonOptions = styled(RadioGroup.Item)`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1rem;
  align-items: center;
  justify-content: left;
  text-transform: uppercase;
  color: ${(props) => props.theme.baseText};
  font-size: 0.75rem;
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.baseButton};
  svg {
    color: ${(props) => props.theme.purple};

    @media screen and (max-width: 420px) {
      height: 16px;
      width: 20px;
    }
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme.baseHover};
    transition: 0.2s;
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }

  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 0.75rem;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.baseText};
`;
