import styled from 'styled-components';

export const ButtonStyled = styled.button`
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
  }
`;
