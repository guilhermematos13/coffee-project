import styled from "styled-components";

export const CheckoutContainer = styled.div`
width: 100%;
padding: 2rem 10rem;
margin-top: 2.5rem;
display: grid;
grid-template-columns: calc(60% - 2rem) calc(40%);
gap: 2rem; 
`

export const OrderDetailsContainer = styled.div`
display: flex;
flex-direction: column;
`

export const TitleForm = styled.strong`
font-family: 'Baloo 2';
font-weight: 700;
font-size: 1.125rem;
margin-bottom: 1rem;
`