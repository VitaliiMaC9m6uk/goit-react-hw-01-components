import React from 'react';


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