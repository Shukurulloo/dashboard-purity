import styled from 'styled-components'


export const ContainerDt = styled.div`
display: flex;
flex-direction: column;
background-color: #F8F9FA;
`
export const Title = styled.div`
color: var(--gray-gray-700, #2D3748);
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
export const WrapDrid = styled.div`
display: grid;
grid-template-columns: 332px  332px 332px 332px ;
gap: 20px;
`
// export const WrapDrid = styled.div`

// `

// export const WrapDrid = styled.div`

// `

// export const WrapDrid = styled.div`

// `

// export const WrapDrid = styled.div``



