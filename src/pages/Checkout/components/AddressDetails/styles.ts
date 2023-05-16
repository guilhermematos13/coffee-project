import styled from 'styled-components';

export const AddressDetailsContainer = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme.baseCard};
  padding: 2.5rem;

  @media screen and (max-width: 420px) {
    padding: 1.5rem;
  }
`;

export const DescriptionTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.yellowDark};
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
      font-size: 0.65rem;
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  .cepInput {
    width: 25%;

    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }

  .numberAndComplement {
    display: grid;
    grid-template-columns: calc(25%) calc(75% - 0.75rem);
    gap: 0.75rem;

    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
    }
  }

  .addressOtherDetails {
    display: grid;
    grid-template-columns: calc(25%) calc(65% - 1.5rem) calc(10%);
    gap: 0.75rem;

    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
