import React from 'react';
import { Statlist } from './statlist';

export const Statistics = (data) => {
   return(
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
         <ul className="stat-list">           
            <Statlist stata={data}></Statlist>     
      </ul> 
   </section>
       )
          
}