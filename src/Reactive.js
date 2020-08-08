/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Matrix from './Matrix';

const Reactive = () => {
  const [rnd, setRnd] = useState([1, 2, 3]);

  // const url = 'http://10.0.0.197:8000/hotwrapper';
  const url = 'https://calm-everglades-94030.herokuapp.com';
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
      <Matrix data={rnd} />
      <button className="btn btn-primary" type="button" onClick={getRandom}>
        More Radioactive Bits!
      </button>
    </div>
  );
};

export default Reactive;
