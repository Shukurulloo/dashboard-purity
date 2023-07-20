import styled from "styled-components"; 
import chakrabgImg from '../assets/signInImage.png'


export const WrapSignIn = styled.div`
display: flex;
width: 100%;
border: 1px solid black;
flex-direction: column;

.wrapCont{
    display: flex;
    width: 100%;
    border: 1px solid black;
    padding-bottom:'140px'
}

`
export const SigninLeft = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid black;
    padding-left: 206px;
 
 `
 export const SigninRight = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid red;
   background-image: url(${chakrabgImg});
   background-position: center;
   background-size:cover;
    height: 872px;

    border-radius: 0 0 0 20px;
 `