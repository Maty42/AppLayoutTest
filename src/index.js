import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrollableTabsButtonAuto from './TopNavigation.js';
import AppBar from './AppBarNav.js';

ReactDOM.render(<PrimaryAppBar/>, document.getElementById('header'));
ReactDOM.render(<ScrollableTabsButtonAuto />, document.querySelector('#body'));
