import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrollableTabsButtonAuto from './TopNavigation.js';
import CustomizedSnackbars from './SnackBar.js'

ReactDOM.render(<CustomizedSnackbars />, document.querySelector('#root'));
ReactDOM.render(<ScrollableTabsButtonAuto />, document.querySelector('#root'));

//ReactDOM.render(<But />, document.querySelector('#app'));
//ReactDOM.render(<App />, document.getElementById('root'));
