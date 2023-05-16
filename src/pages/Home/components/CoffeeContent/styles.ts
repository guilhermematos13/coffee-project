import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 5.75rem 10rem;
  margin-top: 2rem;
`;

export const CoffeeContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.75rem;
`;

export const TitleCoffeeContent = styled.strong`
  margin-bottom: 3.25rem;
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  color: ${(props) => props.theme.baseSubTitle};

  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    white-space: nowrap;
    text-align: left;
  }
`;
