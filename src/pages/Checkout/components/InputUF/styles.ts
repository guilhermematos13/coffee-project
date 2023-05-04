import styled from "styled-components";

export const InputForm = styled.input`
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 0.75rem;
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};
  text-transform: uppercase;

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};

    &:active {
      border: 1px solid ${(props) => props.theme.yellowDark};
    }
  }
`;
