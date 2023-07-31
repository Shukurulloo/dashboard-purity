import styled from 'styled-components'
import Signupimg from'../assets/ImageSignUp.png'



export const ContainerSignUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 120vh;
    border: 1px solid black;
    background-image: url(${Signupimg});
   background-position:center;
   background-size:contain;
   background-position-y:top;
   background-repeat:no-repeat;

`

export const WrapSignup = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top:55px;
    align-items: center;
  
    
`
export const WrapperSignUp = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 15px;
    background: var(--black-amp-white-white, #FFF);
    box-shadow: 0px 7px 23px 0px rgba(0, 0, 0, 0.05);
    margin-top: 15%;
    padding: 50px 50px 40px ;

h4{
      color: var(--gray-gray-700, #2D3748);
    font-family: Helvetica;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    margin-top: 0px;
    margin-bottom:7px;
}
input{
    display: flex;
    width: 350px;
    height: 50px;
    padding: 0px 20px;
    align-items: center;
    border-radius: 15px;
    border: 1px solid var(--gray-gray-200, #E2E8F0);
    background: var(--black-amp-white-white, #FFF);
}
.checkbox{ margin-bottom:20px}
label{
  display: flex;
  align-items: center;
  margin-top:10px;
input{
  width: 20px;
  margin-right: 5px;
}

}
p{
  color: #A0AEC0;
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%;
padding:15px 0 0 70px;
display: flex;

h5{
    color:#4FD1C5; 
    font-weight: 700;
    margin-left: 3px;
&:hover{
    color: #4fd1c497;
}
}

}
`

export const Accaunts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;


h1{
    color: var(--gray-gray-700, #2D3748);
text-align: center;
font-family: Helvetica;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 25.2px */
margin-bottom: 22px;
}
.platform{
    display: flex;
    align-items: center;
    justify-content: center;
}
.Icons{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid var(--gray-gray-200, #E2E8F0);
    margin-left:20px;


&:hover{
    color: #4FD1C5;
}
}
`

export const Checkbox = styled.div`
width: 100%;
background-color: #fff;
display: flex;
align-items: center;
justify-content: left;
padding: 5px 0;
margin: 20px 0;

label{
background-color: #d2d2d2;
width: 36px;
height: 18px;
border-radius:200px;
cursor: pointer; 
margin-top:-1px;
position: relative;
}
label::before{
    position: absolute;
    content: '';
    background-color: #fff;
    width: 13.5px;
    height: 13.5px;
    border-radius: 200px;
    margin: 3px;
    transition: 0.2s;
}

input:checked + label {
    background-color: #4FD1C5;
  }

  input:checked + label::before {
    transform: translateX(17px);
    background-color: #fff;
  }
input{
    width:7px;
    height:4px;
    display: none;
}
h2{
    color: var(--gray-gray-700, #2D3748);
    font-family: Helvetica;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    margin-left: 6px;
}
`
