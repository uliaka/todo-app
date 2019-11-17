import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className='card-container'>
    <div className='card-title'>
        {props.title}
    </div>
    <div className='card-body'>
      {props.body}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.object
}

export default Card;