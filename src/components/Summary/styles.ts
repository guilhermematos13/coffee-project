import styled, { css } from "styled-components";


export const SummaryContainer = styled.div`
width: 100%;
height: 34rem;
display: flex;
align-items: center;
justify-content: center;
gap:3.5rem ;
`

export const SummaryHeader = styled.header`
strong {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 4rem;

    color: ${props => props.theme.baseTitle}
}

p{
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${props => props.theme.baseTitle}
}
`

export const SummarySection = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-row-gap: 1.25rem;
margin-top: 4.25rem;

span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${props => props.theme.baseText}
}
`

interface IconsSummaryProps {
    variant : 'yellowDark' | 'gray' | 'yellow' | 'purple'
}

export const IconsSummary = styled.div<IconsSummaryProps>`
background-color: ${props => props.variant === 'yellowDark' ? props.theme.yellowDark : props.variant === 'gray' ? props.theme.baseText : props.variant === 'purple' ? props.theme.purple : props.variant === 'yellow' && props.theme.yellow};
color: ${props => props.theme.white};
display: flex;
align-items: center;
justify-content: center;
border-radius: 9999px;
height: 32px;
width: 32px;

`