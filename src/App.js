/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

/** make a 0-padded string from a number */
function pad(num, size = 3) {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}


/** Format data in padded, monospaced grid */
function MatrixRender(dataInt) {
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
}

/** Main app */
function App() {
  const [rnd, setRnd] = useState([1, 2, 3]);
  const url = 'http://10.0.0.197:8000/hotwrapper';

  /** Get random byte values from HotBits */
  function getRandom() {
    axios
        .get(url, {
          mode: 'no-cors',
        })
        .then((res) => {
          const data = res.data;
          setRnd(data);
        });
  }

  useEffect(getRandom, []);
  return (
    <div>
      <h1 className="text-primary">Reactive</h1>
      <h2 className="text-seconary">
        A REST wrapper and modern UI for HotBits
      </h2>
      <p>
        {' '}
        <a href="https://www.fourmilab.ch/hotbits/">HotBits</a> is a random
        number generator web service seeded from measurement of background
        radiation, such as x-rays and gamma rays It was created by John Walker,
        founder of Autodesk.
      </p>
      <h3 className="text-info">It doesn&apos;t get much more random than this.</h3>
      <MatrixRender data={rnd} />
      <button className="btn btn-primary" type="button" onClick={getRandom}>
        Get More Random Radioactive Bits
      </button>
    </div>
  );
}

export default App;
