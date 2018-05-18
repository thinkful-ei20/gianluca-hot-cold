import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

// import store from './store';
//
// import {submitGuess, updateGuess, updateFeedback, toggleAbout, restartGame} from './actions';
//
// store.dispatch(submitGuess('10'));
// store.dispatch(submitGuess('50'));
// store.dispatch(submitGuess('90'));
// console.log(store.getState());
//
// store.dispatch(updateGuess('1'));
// console.log(store.getState());
//
// store.dispatch(updateGuess('10'));
// console.log(store.getState());
//
// store.dispatch(updateGuess('100'));
// console.log(store.getState());
//
// store.dispatch(toggleAbout());
// console.log(store.getState());
//
// store.dispatch(updateFeedback('HEY!'));
// console.log(store.getState());
//
// store.dispatch(restartGame());
// console.log(store.getState());
