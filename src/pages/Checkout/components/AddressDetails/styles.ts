import styled from "styled-components";

export const CheckoutContainer = styled.div`
width: 100%;
padding: 2rem 10rem;
margin-top: 2.5rem;
display: grid;
grid-template-columns: calc(60%) calc(40%);
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

export const AddressDetailsContainer = styled.div`
border-radius: 6px;
background: ${props => props.theme.baseCard};
padding: 2.5rem;
`

export const DescriptionTitle = styled.div`
display: flex;
gap: 0.5rem;

svg {
    color: ${props => props.theme.yellowDark};
}

label {
    color: ${props => props.theme.baseSubTitle};
}

p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: ${props => props.theme.baseText};
}
`

export const FormContainer = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;

.cepInput {
   width: 25%;
}

.numberAndComplement {
    display: grid;
    grid-template-columns: calc(25%) calc(75% - 0.75rem);
    gap:0.75rem;
}

.addressOtherDetails {
    display: grid;
    grid-template-columns: calc(25%) calc(65% - 1.50rem) calc(10%);
    gap:0.75rem;
}
`