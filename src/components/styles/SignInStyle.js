import styled from "styled-components"; 
import chakrabgImg from '../assets/signInImage.png'


export const WrapSignIn = styled.div`
display: flex;
width: 100%;
flex-direction: column;

.wrapCont{
    display: flex;
    width: 100%;
    padding-bottom:'140px'
}

`
export const SigninLeft = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
 
 `
 export const SigninRight = styled.div`
    display: flex;
    flex: 1;
    background-image: url(${chakrabgImg});
    background-position: center;
    background-size:cover;
    height: 872px;

    border-radius: 0 0 0 20px;
 `
export const WrapperSignin = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 36%;
    margin-top: 15%;

h4{
      color: var(--gray-gray-700, #2D3748);
    font-family: Helvetica;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    margin-top: 30px;
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

}

  `
  export const SignInTitle = styled.div`
  
    color:${({cl}) => cl || '#4FD1C5'};
    text-align: left;
    font-family: Helvetica;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 41.6px */
  
  `
    export const SignInText = styled.div`
    
    color:${({cl}) => cl || '#A0AEC0'};
    text-align: left;
    font-family: Helvetica;
    font-size: 14px;
    font-style: normal;
    font-weight:${({fwht}) => fwht || '700;'};
    line-height: 140%; /* 19.6px */
    padding-top: 6px;
    width: ${({wd}) => wd || ''};
    text-align:${({ txaln}) => txaln || ''};
    
    `