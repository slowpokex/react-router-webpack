import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/App";

const div = document.createElement('div');
document.body.insertBefore(div, document.querySelector('script'));

ReactDOM.render(<App />, div);
module.hot && module.hot.accept();