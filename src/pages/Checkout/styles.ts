import styled from "styled-components";

export const CheckoutContainer = styled.form`
width: 100%;
padding: 2rem 10rem;
margin-top: 2.5rem;
`

export const TitleOrder = styled.strong`
font-family: 'Baloo 2';
font-weight: 700;
font-size: 1.25rem;
`

export const UserDetailsContainer = styled.div`

`

export const OrderField = styled.div`
width: 40rem;
border-radius: 6px;
margin-top: 1rem;
padding: 2.5rem;
background: ${props => props.theme.baseCard};
`

export const TitleOrderField = styled.div`
display: flex;
width: 100%;
gap: 0.5rem;
justify-content: start;

label {
    color: ${props => props.theme.baseSubTitle}
}

p {
    color: ${props => props.theme.baseText}
     
}

svg {
    color: ${props => props.theme.yellowDark}
}
`

export const UserAddress = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;

.cep {
    height: 2.75rem;
    width: 11rem;
    border: 0;
    border-radius: 4px;
    padding:0.75rem;
    background: ${props => props.theme.baseButton};
    color: ${props => props.theme.baseText};

    &::placeholder {
        color: ${props => props.theme.baseLabel};
    }
}

.address {
    margin-top:1rem;
    height: 2.75rem;
    border: 0;
    border-radius: 4px;
    padding:0.75rem;
    background: ${props => props.theme.baseButton};
    color: ${props => props.theme.baseText};
}

.number {
    margin-top:1rem;
    width: 12.5rem;
    height: 2.75rem;
    border: 0;
    border-radius: 4px;
    padding:0.75rem;
    background: ${props => props.theme.baseButton};
    color: ${props => props.theme.baseText};
}

.complement {
    margin-top:1rem;
    width: 21.75rem;
    height: 2.75rem;
    border: 0;
    border-radius: 4px;
    padding:0.75rem;
    background: ${props => props.theme.baseButton};
    color: ${props => props.theme.baseText};
}

div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: space-between;
}

span {
    position:absolute;
}

.neighborhood {
    margin-top:1rem;
    width: 12.5rem;
    height: 2.75rem;
    border: 0;
    border-radius: 4px;
    padding:0.75rem;
    background: ${props => props.theme.baseButton};
    color: ${props => props.theme.baseText};
}

.city {
    margin-top:1rem;
    width: 17.25rem;
    height: 2.75rem;
    border: 0;
    border-radius: 4px;
    padding:0.75rem;
    background: ${props => props.theme.baseButton};
    color: ${props => props.theme.baseText};
}

.UF {
    margin-top:1rem;
    width: 3.75rem;
    height: 2.75rem;
    border: 0;
    border-radius: 4px;
    padding:0.75rem;
    background: ${props => props.theme.baseButton};
    color: ${props => props.theme.baseText};
}

`