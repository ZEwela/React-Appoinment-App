import React from "react";
import PropTypes from 'prop-types';
import {Tile} from '../tile/Tile';

export const TileList = ({contacts}) => {
  return (
    <ul>
      {contacts.map((contact, index) => {
        <Tile key={index} contact={contact}/>
      })}
    </ul>
  );
};

TileList.propTypes = {
  contacts: PropTypes.array
}
