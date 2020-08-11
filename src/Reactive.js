/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import Matrix from './Matrix';

const Reactive = ({ endpoint }) => {
  const [randomBytes, setRandomBytes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [waiting, setWaiting] = useState(true);
  /** Get random byte values from HotBits */
  function getRandom() {
    setWaiting(true);
    axios
      .get(endpoint, {
        mode: 'no-cors',
      })
      .then((res) => {
        const { data } = res;
        setRandomBytes(data);
        setWaiting(false);
      });
  }

  useEffect(getRandom, []);
  return (
    <div>
      <Matrix data={randomBytes} />
      <button className={waiting ? 'btn btn-secondary' : 'btn btn-primary'} type="button" onClick={getRandom}>
        More Radioactive Bits!
      </button>
      {waiting
        && (
        <span
          className="text-info"
          style={{ marginLeft: '10px' }}
        >
          Waiting on data...
        </span>
        )}
    </div>
  );
};

Reactive.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Reactive;
