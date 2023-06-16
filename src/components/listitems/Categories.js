import React from 'react';
import categoris from './categoris.json';
import Category from './Category';

export default function Categories() {
  return (
    
    <div className='container'>
        <div className='row'>
            { categoris.map((category) => {
                return <Category categoryObj ={category} />;
            })

            }

      </div>
      </div>
  )
}
