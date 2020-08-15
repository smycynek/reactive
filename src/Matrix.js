/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MatrixDataContext from './MatrixDataContext';
/** make a 0-padded string from a number */
function pad(num, size = 3) {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}

/** Format data in padded, monospaced grid */
const Matrix = () => {
  const data = useContext(MatrixDataContext);
  const dataFormatted = data.map((datum) => pad(datum));
  return (
    <div
      style={{
        fontFamily: 'monospace',
        paddingLeft: '50px',
        paddingBottom: '20px',
      }}
    >
      <div className="row">
        <div className="col-1 m-1 p-1">{dataFormatted[0]}</div>
        <div className="col-1 m-1 p-1">{dataFormatted[1]}</div>
        <div className="col-1 m-1 p-1">{dataFormatted[2]}</div>
      </div>

      <div className="row">
        <div className="col-1 m-1 p-1">{dataFormatted[3]}</div>
        <div className="col-1 m-1 p-1">{dataFormatted[4]}</div>
        <div className="col-1 m-1 p-1">{dataFormatted[5]}</div>
      </div>

      <div className="row">
        <div className="col-1 m-1 p-1">{dataFormatted[6]}</div>
        <div className="col-1 m-1 p-1">{dataFormatted[7]}</div>
        <div className="col-1 m-1 p-1">{dataFormatted[8]}</div>
      </div>
    </div>
  );
};

export default Matrix;
