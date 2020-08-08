/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Matrix from './Matrix';

/** Main app */
function App() {
  const [rnd, setRnd] = useState([1, 2, 3]);
  const url = 'https://calm-everglades-94030.herokuapp.com';
  // const url = 'http://10.0.0.197:8000/hotwrapper';

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
      <h1 className="text-primary">Reactive: A modern UI for HotBits</h1>


      <h3 className="text-info">It doesn&apos;t get much more random than this.</h3>
      <Matrix data={rnd} />
      <button className="btn btn-primary" type="button" onClick={getRandom}>
        More Radioactive Bits!
      </button>
      <div style={{padding: '20px'}}>
        <p>
          {' '}
          <a href="https://www.fourmilab.ch/hotbits/">HotBits</a> is a random
        number generator web service seeded from measurement of background
        radiation, such as x-rays and gamma rays.  It was created by John Walker,
        founder of Autodesk, so of course, I have a soft-spot for it :)
        </p>
        <p>
          <i>The HotBits site has some issues with CORS, so I run it through a proxy
        service so React can call it.</i>
        </p>
      </div>
      <hr />
      <small><a href="https://github.com/smycynek/reactive">https://github.com/smycynek/reactive</a></small>
    </div>
  );
}

export default App;
