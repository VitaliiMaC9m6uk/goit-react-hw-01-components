import styled from 'styled-components';

export const Table = styled.table`
margin:20px auto;
width:700px;
border-collapse:collapse;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`
export const Thead = styled.thead`
    background-color:rgba(19, 143, 162,0.5);
    text-align:center;

`
export const Tr = styled.tr`
    text-align:center;
    border-bottom:1px solid #dddddd;
    &:nth-child(even){
       background-color:rgb(19 143 162 / 60%); 
       
    }
    &:nth-child(odd){
        background-color:rgb(19 143 162 / 70%);
    }
` 
