import styled from 'styled-components';

export const ButtonRemoveStyled = styled.button`
  border: 0;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;

  color: ${(props) => props.theme.baseText};
  background: ${(props) => props.theme.baseButton};

  svg {
    color: ${(props) => props.theme.purple};

    @media screen and (max-width: 425px) {
      width: 12px;
      height: 12px;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 0.5rem;
  }
`;
