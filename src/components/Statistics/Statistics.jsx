import PropTypes from 'prop-types';
import { Section, SectionList,SectionItem } from './Statistics.styled';

export const Statistics = ({ data, title }) => {      
   return(
    <Section>         
          {title && (<h2 className='title'>{title}</h2>)}
         <SectionList >           
            {data.map(el => (
             
               <SectionItem key={el.id}>
                  <span >{el.label}</span>
                  <span >{el.percentage} { `%`}</span>
               </SectionItem>
          ))}      
      </SectionList> 
   </Section>
       )
          
}

Statistics.prototype = {
   title: PropTypes.string,
   data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,
   }))
}