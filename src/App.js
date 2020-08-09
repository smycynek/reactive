/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Reactive from './Reactive';

/** Main app */
function App() {
  const proxyEndpoint = 'https://calm-everglades-94030.herokuapp.com';
  return (
    <div>
      <h1 className="text-primary">Reactive: A modern UI for HotBits</h1>
      <p className="text-info">It doesn&apos;t get much more random than this.</p>
      <Reactive endpoint={proxyEndpoint}/>
      <div style={{padding: '20px'}}>
        <p>
          {' '}
          <a href="https://www.fourmilab.ch/hotbits/">HotBits</a> is a random
        number generator web service seeded from measurement of background
        radiation, such as x-rays and gamma rays.  It was created by John Walker,
        founder of Autodesk, so of course, I have a soft-spot for it :)
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
