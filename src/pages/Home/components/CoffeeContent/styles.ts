import styled from "styled-components";

export const CoffeeContentContainer = styled.div`
width: 100%;
padding: 2rem 10rem;
display: grid;
grid-template-columns: repeat(4, 1fr);
`

export const TitleCoffeeContent = styled.strong`
width: 100%;
padding: 2rem 10rem;
font-size: 2rem;
font-family: 'Baloo 2';
font-weight: 800;
color: ${props => props.theme.baseSubTitle}
`