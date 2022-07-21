import React from "react";
import PropTypes from 'prop-types';
import {Tile} from '../tile/Tile';

export const TileList = ({list}) => {
  return (
    <ul>
      {list.map((data, index) => {
        return <Tile key={index} data={data}/>
      })}
    </ul>
  );
};

TileList.propTypes = {
  list: PropTypes.array
}
