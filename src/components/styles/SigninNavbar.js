import styled from "styled-components";



export const WrapNavbar = styled.div`
display: flex;

align-items: center;
border-radius: 15px;
border: 1.5px solid #FFF;
background: linear-gradient(137deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.80) 100%);
box-shadow: 0px 7.000000476837158px 23.000001907348633px 0px rgba(0, 0, 0, 0.05);
backdrop-filter: blur(10.500000953674316px);
width: 100%;
height: 70px;
flex-shrink: 0;
justify-content: space-around;
margin-top:24px;
margin-left: 36%;
padding: 0 17px 0 17px;
.navicons{
    flex: 2;
        padding: 0 40px 0;
    display: flex;
    align-items: center;
  
    
}
.flex{
    display: flex;  
  
     flex: 1;
     justify-content: left;
}
.navicon{
    display: flex;
margin-left:45px;
width: 100%;  
flex: 1;
}

h1{
    color: #2D3748;
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
margin-left: 5px;   
width: 164px;
}
h3{
    color: var(--gray-gray-700, #2D3748);
text-align: center;
font-family: Helvetica;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 15px */
margin-left: 5px;

}
`
export const ButtonSignin = styled.div`
display: flex;
width:${({wd}) => wd || '150px'};
height:${({ht}) => ht || '35px' };
padding: 0px 8px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius:${({bdrs}) => bdrs || '34.5px'};
background:${({bg}) => bg || 'linear-gradient(41deg, #313860 0%, #151928 100%)'};
color:${({cl}) => cl || ' var(--black-amp-white-white, #FFF)'};
text-align: center;
font-family: Helvetica;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 15px */
cursor: pointer;



&:hover{
    background-color: #2ce2d08f;
}
`
// export const WrapNavbar = styled.div`
// `