import PropTypes from 'prop-types';

export const Statistics = ({ data,title }) => {   
   return(
    <section className="statistics">         
          {title && (<h2 className='title'>{title}</h2>)}
         <ul className="stat-list">           
            {data.map(el => (
               <li className="item" key={el.id}>
                  <span className="label">{el.label}</span>
                  <span className="percentage">{el.percentage} { `%`}</span>
               </li>
          ))}      
      </ul> 
   </section>
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