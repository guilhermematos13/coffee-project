import styled from "styled-components";

export const InputSuffixStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  gap: 1rem;
  background: ${(props) => props.theme.baseButton};

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }

  input {
    background: transparent;
    color: ${(props) => props.theme.baseText};
    padding: 0.75rem;
    border-radius: 4px;
    width: 100%;
    border: 0;

    &:focus {
      border: 1px solid ${(props) => props.theme.yellowDark};
    }
  }

  span {
    font-style: italic;
    font-size: 0.75rem;
    margin-right: 1rem;
    text-align: right;
  }
`;
