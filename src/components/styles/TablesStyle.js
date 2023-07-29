import styled from 'styled-components'


export const ContainerTb =styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 61vmax;
background-color: #F8F9FA;

`

export const TablesTitle = styled.div`

color:${({clr}) => clr || 'var(--gray-gray-700, #2D3748)'};
font-family: Helvetica;
font-size: ${({fsize}) => fsize || '14px'};
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
margin:${({mg}) => mg || '-25px 30px 20px 50px'};   
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
export const TablesFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96%;
    padding-bottom:20px;
    border-radius: 15px;
    background-color:#fff; 
    margin:20px;

.actives{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
    justify-content: flex-start;
    
}

.wrapIcon{
    display: flex;
    width: 100%;    
    justify-content: space-between;
    padding:20px 15px 0 0px;
}
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
