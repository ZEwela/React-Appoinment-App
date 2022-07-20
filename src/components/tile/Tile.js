import React from "react";
import PropTypes from 'prop-types';

export const Tile = ({contact}) => {
  const array = Object.values(contact);
  return (
    console.log('ej', array),
    <div className="tile-container">
      {array.map((el, index) => {
       return (index === 0) ?
           <p className="tile-title" key={index}>{el}</p>    
        : 
           <p className="tile" key={index}>{el}</p>
      })}
    </div>
  );
};

Tile.propTypes = {
  contact: PropTypes.object
}


