import styled from 'styled-components'

export const ViewStyle = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`
export const Ordericons =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
div{
    width: 0px;
height: 32px;
    border: 1px solid #E2E8F0;
    margin: 7px 0px 7px 0px;
}
`
export const Orderdata =styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: left;
flex: 7;
padding:5px;
div{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 0 25px 0;
}
h3{
    color: var(--gray-gray-700, #2D3748);
font-family: Helvetica;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
}
p{
    color: var(--gray-gray-400, #A0AEC0);
font-family: Helvetica;
font-size: 11px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
}
`
// export const Ordericons =styled.div`
// `