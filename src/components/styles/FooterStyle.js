import { styled } from "styled-components"

export const FooterStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 150vh;
height: 75px;
background-color: #F8F9FA;
`

export const FooterLeft = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex: 1;
padding-left: 26px;
p{
color: var(--gray-gray-400, #A0AEC0);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */

.simmple{
    color: var(--teal-teal-400, #38B2AC);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 150%;
}
}
`
export const FooterRight = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex: 1;

h3{
    color: var(--gray-gray-400, #A0AEC0);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
padding-right: 50px;
}

`
// export const FooterLeft = styled.div`

// `