import styled from 'styled-components'



export const TableStyleTb  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom:20px;
    border-radius: 15px;
`

export const WraptableTb = styled.div`
    display: flex;
    border-top: 1px solid #E2E8F0;
    height: 52px;
    width: 97%;


h4{
    color: var(--gray-gray-400, #A0AEC0);
    font-family: Helvetica;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 15px */
    /* padding-right:10px; */
  
}
h2{
    color: var(--gray-gray-700, #2D3748);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
padding-left: 10px;
/* padding-left: ${({pleft}) => pleft ||  "10px"}; */
}
h3{
    color: var(--gray-gray-500, #718096);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */ 
}

h5{
    color: var(--gray-gray-500, #718096);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
}

img{
    width: 35.5px;
height: 35.5px;
border-radius: 10px;    
margin: 15px 10px 15px 0px
};
p{
    color: var(--gray-gray-500, #718096);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
cursor: pointer;



}
`
export const Wrabtab  = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content:${({jfct}) => jfct || 'center'};
    padding-Left:0px;
  
   


.miniWrap{
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 46%;
    padding-left: 8px;

}

`
export const TableFooter = styled.div`
display: flex;
width: 100%;
flex-direction: column;
background-color:  #fff;
padding: 30px;
`




export const TableButton = styled.div`
border-radius: 8px;
padding: 2.5px 10px;
background:${({bg}) => bg || 'var(--green-green-400, #48BB78)'};
color: var(--black-amp-white-white, #FFF);
text-align: center;
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */

&:hover{
    background-color: red;
}
`