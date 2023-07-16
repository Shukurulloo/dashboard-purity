import styled from "styled-components"



export const SideBarstyle = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    background-color: #F8F9FA;
    width: 320px;
    height: 109vh;
    align-items: center;
    
    /* justify-content: center; */
h5{
    color: var(--gray-gray-700, #2D3748);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
margin-left: -45px;
padding: 10px 0px 0px 0px;
}

`
export const WrapSidebar = styled.div`
display: flex ;
margin-top: 14px;
align-items: center;
width: 219.5px;
height: 54px;
padding-left: 20px;
flex-shrink: 0;
/* background-color: ${({bg}) => bg || 'none'}; */
border-radius: 15px;
box-shadow:${({bxshd}) => bxshd || 'none'};


h1{
color: #2D3748;
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
margin-left: 15px;
width: 174px;

}
h3{
    color: var(--gray-gray-700, #2D3748);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
padding-left:15px;
}

`
export const BorderLine = styled.div`
width: 233.25px;
height: 0px;
flex-shrink: 0;
/* border: 1px solid #E0E1E2; */

`
export const WrapIcon = styled.div`
width:${({wd}) => wd || '30px'};
height:${({ht}) => ht || '30px'};
flex-shrink: 0;
border-radius:${({bdrds}) => bdrds || '12px'};
background:${({bg}) => bg || 'var(--teal-teal-300, #4FD1C5)' };
display: flex;
justify-content: center;
align-items: center;
margin-right:${({mgrht}) => mgrht || '0px'};

img{
color: white;
}
`
export const Text =styled.div`
color: var(--gray-gray-400, #A0AEC0);
font-family: Helvetica;
font-size: 13px;
font-style: normal;
font-weight: ${({fwt}) => fwt || '700'};
line-height: 150%; /* 18px */
padding-left:${({pdlft}) => pdlft || '15px'};
text-decoration: none;
`
export const SidebarFooter = styled.div`
width: 218px;
margin-top: 50px;
height: 169.5px;
flex-shrink: 0;
border-radius: 15px;
background: var(--teal-teal-300, #4FD1C5);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
h1{
    color: var(--black-amp-white-white, #FFF);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
padding-top: 10px;
padding: 10px 0px 0px 20px;
}
p{
    color: var(--black-amp-white-white, #FFF);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
padding: 10px 0px 10px 20px;
}
button{
    display: flex;
width: 186px;
height: 35px;
padding: 0px 8px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 12px;
background: var(--black-amp-white-white, #FFF);
    color: var(--gray-gray-700, #2D3748);
text-align: center;
font-family: Helvetica;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 15px */
border: none;
margin-left: 17px;
}
`