import styled from 'styled-components'

export const NavbarStyle = styled.div`
display: flex;
width: 150vh;
height: 75px;
/* border: 1px solid black;    */
background-color: #F8F9FA;

`

export const NavLeft = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: flex-start;
justify-content: center;
padding-left: 30px;

p{
color: var(--gray-gray-700, #2D3748);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%;
}

`

export const NavRight = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content:flex-end;

p{
    color: var(--gray-gray-500, #718096);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
/* margin-left: -25px; */
padding: 0px 60px 0px 5px ;
}
`

export const WrapInput = styled.div`
display: flex;
width: 199px;
height: 39.5px;
align-items: center;
flex-shrink: 0;
border-radius: 15px;
border: 0.5px solid var(--gray-gray-200, #E2E8F0);
background: var(--black-amp-white-white, #FFF);


input{
color: var(--gray-gray-400, #A0AEC0);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
border: none;
}
`