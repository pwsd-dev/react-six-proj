import React from 'react';
import ReactDom from 'react-dom';
import App from './app/app.js'
import 'bootstrap/dist/css/bootstrap.min.css';


/*
let hr = React.createElement('hr');
let div = React.createElement('div', { className: 'test' }, [hr]);
*/

// ReactDom.render(<AppCounters />, document.querySelector('#appCounters'));

// ReactDom.render(<App />, document.querySelector('#app'));

// ReactDom.render(<App />, document.querySelector('#appSimple'));

ReactDom.render(<App />, document.querySelector('#app'));

