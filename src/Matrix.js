/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** make a 0-padded string from a number */
function pad(num, size = 3) {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}

/** Format data in padded, monospaced grid */
const Matrix = (dataInt) => {
  const data = dataInt.data.map((datum) => pad(datum));
  return (
    <div
      style={{
        fontFamily: 'monospace',
        paddingLeft: '50px',
        paddingBottom: '20px',
      }}
    >
      <div className="row">
        <div className="col-1 m-1 p-1">{data[0]}</div>
        <div className="col-1 m-1 p-1">{data[1]}</div>
        <div className="col-1 m-1 p-1">{data[2]}</div>
      </div>

      <div className="row">
        <div className="col-1 m-1 p-1">{data[3]}</div>
        <div className="col-1 m-1 p-1">{data[4]}</div>
        <div className="col-1 m-1 p-1">{data[5]}</div>
      </div>

      <div className="row">
        <div className="col-1 m-1 p-1">{data[6]}</div>
        <div className="col-1 m-1 p-1">{data[7]}</div>
        <div className="col-1 m-1 p-1">{data[8]}</div>
      </div>
    </div>
  );
};

export default Matrix;
