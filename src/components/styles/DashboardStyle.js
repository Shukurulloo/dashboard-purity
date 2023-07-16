import styled from 'styled-components'
import bgimage from '../assets/brooke-unsplash1bgimg.png'

export const ContainerDt = styled.div`
display: flex;
flex-direction: column;
background-color: #F8F9FA;
width: 100%;
align-items: center;
`
export const Title = styled.div`
color:${({clr}) => clr || 'var(--gray-gray-700, #2D3748)'};
font-family: Helvetica;
font-size: ${({fsize}) => fsize || '14px'};
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
margin:${({mg}) => mg || '-25px 30px 20px 30px'};   

`
export const WrapDash = styled.div`
display: flex;
width: 332px;
height: 80px;
flex-shrink: 0;
border-radius: 15px;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
justify-content: space-between;
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
export const WrapGrid = styled.div`
display: grid;
grid-template-columns:${({grdc}) => grdc || '332px  332px 332px 332px '};
gap:${({gap})  =>  gap || '20px'};
margin-top:${({mjtp}) => mjtp || '20px'};
margin-left:${({mglft}) => mglft || '40px'};
`

export const WrapMini = styled.div`
display: flex;
flex-direction:${({flxdn}) => flxdn || 'row'};
width: ${({wd}) => wd || '792px'};
height: 290.5px;
flex-shrink: 0;
border-radius: 15px;
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
flex: 1;
flex-direction: column;
`
export const WrapMiniRight = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

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
width: 543px;
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
/* flex-direction: column; */
width: 100%;
margin-top: 20px;
align-items: center;
justify-content: center;

.icons{
    display: flex;
    align-items: center;
}

`

export const MidLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 652px;
height: 445px;
flex-shrink: 0;
/* margin-left: -40px; */
border-radius: 15px;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
.active{
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-right: 220px;
    display: flex;
    align-items: flex-start;
}
img{
    margin-top: 20px;
    

}

`
export const MidRight = styled.div`
width: 716px;
height: 445px;;
flex-shrink: 0;
border-radius: 15px;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
display: flex;
flex-direction: column;
margin: 0px 0px 0px 20px;

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
`

// export const MidLeft = styled.div`
// `

// export const MidLeft = styled.div`
// `





