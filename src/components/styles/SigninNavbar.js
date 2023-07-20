import styled from "styled-components";



export const WrapNavbar = styled.div`
display: flex;
align-items: center;
border-radius: 15px;
border: 1.5px solid #FFF;
background: linear-gradient(137deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.80) 100%);
box-shadow: 0px 7.000000476837158px 23.000001907348633px 0px rgba(0, 0, 0, 0.05);
backdrop-filter: blur(10.500000953674316px);
width: 987.5px;
height: 70px;
flex-shrink: 0;
justify-content: space-around;
margin-top:24px;

div{
    display: flex;
}

h1{
    color: #2D3748;
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
}
h3{
    color: var(--gray-gray-700, #2D3748);
text-align: center;
font-family: Helvetica;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 15px */
margin-left: 30px;
}
`
export const ButtonSignin = styled.div`
display: flex;
width: 150px;
height: 35px;
padding: 0px 8px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 34.5px;
background: linear-gradient(41deg, #313860 0%, #151928 100%);
color: var(--black-amp-white-white, #FFF);
text-align: center;
font-family: Helvetica;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 15px */
`
// export const WrapNavbar = styled.div`
// `