import React from "react";
import PropTypes from 'prop-types';

export const Tile = ({data}) => {
  const array = Object.values(data);
  return (
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
  data: PropTypes.object
}


