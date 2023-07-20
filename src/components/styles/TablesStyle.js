import styled from 'styled-components'


export const ContainerTb =styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const TablesTitle = styled.div`

color:${({clr}) => clr || 'var(--gray-gray-700, #2D3748)'};
font-family: Helvetica;
font-size: ${({fsize}) => fsize || '14px'};
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
margin:${({mg}) => mg || '-25px 30px 20px 30px'};   
`
export const WrapTable = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: #fff;
padding: 0 20px 0 20px;
margin: 20x 0 0 0;
`
// export const TablesTitle = styled.div`

// `
// export const TablesTitle = styled.div`

// `
// export const TablesTitle = styled.div`

// `
// export const TablesTitle = styled.div`

// `

// export const TablesTitle = styled.div`

// `
