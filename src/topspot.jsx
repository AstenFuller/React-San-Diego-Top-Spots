import React from 'react';

export default props => (
         <div className='well'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a className='link' href={'https://maps.google.com/?q=' + props.location}>Google Maps</a>
         </div>
);