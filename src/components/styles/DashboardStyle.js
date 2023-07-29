import styled from 'styled-components'
import bgimage from '../assets/brooke-unsplash1bgimg.png'

export const ContainerDt = styled.div`
display: flex;
flex-direction: column;
background-color: #F8F9FA;
width: 100%;
height: 90vmax;
align-items: center;
border: 1px solid red;
`
export const Title = styled.div`
color:${({clr}) => clr || 'var(--gray-gray-700, #2D3748)'};
font-family: Helvetica;
font-size: ${({fsize}) => fsize || '14px'};
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
margin:${({mg}) => mg || '-25px 30px 20px 50px'};   

`
export const WrapDash = styled.div`
display: flex;
width: 100%;
height: 80px;
flex: 1;
padding: 0px 20px;
margin: 0px 10px 20px;
flex-shrink: 0;
border-radius: 15px;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
justify-content: space-between ;
align-items: center;


p{
    color: var(--green-green-400, #48BB78);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
padding-left: 7px;
}


`

export const Grid = styled.div`
display: flex;
width: 100%;
align-items: center;
padding: 0px 20px;
justify-content: space-around;
`
export const Flex = styled.div`
display: flex;
align-items: center;
width: 100%;
padding: 0px 30px;

`
export const WrapMini = styled.div`
display: flex;
margin-left: 0px;
flex-direction:${({flxdn}) => flxdn || 'row'};
width: ${({wd}) => wd || '100%'};
height: 290.5px;
flex-shrink: 0;
border-radius: 15px;
/* margin-right:20px; */
align-items: center;
justify-content: center;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
p{
color: var(--gray-gray-400, #A0AEC0);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
width: 329.5px;
height: 39px;
padding-top: 8px;
}

`
export const WrapMinileft= styled.div`
display: flex;
flex: 3;
flex-direction: column;
`
export const WrapMiniRight = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 2;
padding-right: 20px;

img{
    border-radius: 15px;

}

`

export const DivText = styled.div`
 display: flex;
    margin:${({mg}) => mg || '100px 0px 0px 20px'};

`

export const WrapImg = styled.div`
background-image: url(${bgimage});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
width: 100%;
height: 260px;
border-radius: 12px;
p{
    color: var(--black-amp-white-white, #FFF);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
width: 384.5px;
height: 39px;
flex-shrink: 0;
margin-left:20px;
}

`


export const WrapMid = styled.div`
display: flex;
width: 100%;
margin-top: 20px;
align-items: center;
justify-content: center;
padding: 0px 30px 20px 10px;

.icons{
    display: flex;
    align-items: center;
}

`

export const MidLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 445px;
flex: ${({flx}) => flx || "2"};
flex-shrink: 0;
margin:0px 20px;
border-radius: 15px;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
border-top-left-radius: 15px;
  border-top-right-radius: 15px;
.active{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
    justify-content: flex-start;
}
.progress{
    margin-top: 22px;
    

}
.tablediv{
    display: flex;
    width: 100%;    
    justify-content: space-between;
    padding:20px 15px 0 0px;
}
`
export const WrapData = styled.div`
display: flex;
margin-top:${({mjtp}) => mjtp || '20px'};
margin-left:${({mglft}) => mglft || ''};
width: 100%;
padding:20px 20px 0px 0px

`


export const MidRight = styled.div`
height: 445px;;
flex-shrink: 0;
flex: ${({flx}) => flx || "3"};
border-radius: 15px;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
display: flex;
flex-direction: column;
margin: 0px 0px 0px 0px;

img{
    width: 670px;
    height: 312px;
margin: 30px 10px 10px 20px;
}

`
export const MiniMid= styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
flex:1;
padding: 0px 20px;

`

// export const MidLeft = styled.div`
// `

// export const MidLeft = styled.div`
// `





