import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.LableFilter}>
    Find contacts by name
    <input
      className={s.InputFilter}
      placeholder="Ivan Petrov"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default Filter;
