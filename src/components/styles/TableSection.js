import styled from 'styled-components'



export const TableStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const Wraptable = styled.div`
    display: flex;
    border-top: 1px solid #E2E8F0;
   
    
    height: 52px;
    width: 97%;

.wrabtab{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding-Left:10px;

    }
h4{
    color: var(--gray-gray-400, #A0AEC0);
    font-family: Helvetica;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 15px */
  
}
h2{
    color: var(--gray-gray-700, #2D3748);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
padding-left: 10px;
/* padding-left: ${({pleft}) => pleft ||  "10px"}; */
}
h3{
    color: var(--gray-gray-500, #718096);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */ 
}

h5{
    color: var(--gray-gray-500, #718096);
font-family: Helvetica;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
}

img{
    width: 125px;
height: 24px;
  
};
`


