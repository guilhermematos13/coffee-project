import styled from "styled-components";

export const PaymentDetailsContainer = styled.div`
border-radius: 6px;
background: ${props => props.theme.baseCard};
padding: 2.5rem;
margin-top: 0.75rem;
`

export const DescriptionPayment = styled.div`
display:flex;
gap: 0.5rem;

svg {
    color: ${props => props.theme.purple};
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

export const OptionsPaymentButtons = styled.div`
display: grid;
gap: 0.75rem;
grid-template-columns: repeat(3,1fr);
`