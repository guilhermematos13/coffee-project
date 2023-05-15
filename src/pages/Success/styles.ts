import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme.yellowDark};
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  @media screen and (max-width: 1250px) {
    img {
      display: none;
    }
  }
`;

export const UserData = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right bottom, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;

  div {
    display: flex;
    margin-bottom: 2rem;
  }

  p {
    font-size: 0.99rem;
  }

  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;

export const FirstIcon = styled.div`
  margin-top: 1rem;
`;

interface IconStyledProps {
  variant: 'purple' | 'yellow' | 'yellowDark';
}

export const IconStyled = styled.span<IconStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  margin-right: 8px;
  border-radius: 999px;
  background-color: ${(props) =>
    props.variant === 'purple'
      ? props.theme.purple
      : props.variant === 'yellow'
      ? props.theme.yellow
      : props.variant === 'yellowDark' && props.theme.yellowDark};
  color: ${(props) => props.theme.white};
`;
