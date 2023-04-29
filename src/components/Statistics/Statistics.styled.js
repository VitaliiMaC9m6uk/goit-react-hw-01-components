import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Section = styled.section`
text-align: center;
width: 600px;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 30px;
box-shadow: 5px 5px 10px rgb(24, 22, 22);
`

export const SectionList = styled.ul`
display:flex;
justify-content: space-between;
padding:0;
`
export const SectionItem = styled.li`
color: white;
font-size: 17px;
font-weight: 700px;
  background-color: ${getRandomHexColor};
  width: 100%;
  display:flex;
  flex-direction:column;
  padding-top:10px;
  padding-bottom:10px;
`;