import styled from "styled-components";

export const InputSuffixStyled = styled.div`
display: flex;
align-items: center;
width: 100%;
border: 0;
border-radius: 4px;
padding:0.75rem;
gap: 1rem;
background: ${props => props.theme.baseButton};
color: ${props => props.theme.baseText};

&::placeholder {
    color: ${props => props.theme.baseLabel};
}

input {
    background: transparent;
    color: ${props => props.theme.baseText};
    width: 100%;
    border: 0
}

span {
    font-style: italic;
    font-size: 0.75rem;
    text-align: right;
}
`