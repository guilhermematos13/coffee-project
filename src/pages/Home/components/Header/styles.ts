import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
    width: 5.25rem;
    cursor: pointer;
  }
`;

export const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.purpleDark};
    height: 2.5rem;
    background-color: ${(props) => props.theme.purpleLight};
    padding: 0.5rem;
    border-radius: 6px;
  }

  button {
    display: flex;
    border: 0;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    height: 2.5rem;

    background: ${(props) => props.theme.yellowLight};
    cursor: pointer;
  }
`;
