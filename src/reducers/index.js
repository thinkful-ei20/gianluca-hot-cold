
import {SUBMIT_GUESS, UPDATE_GUESS, UPDATE_FEEDBACK, TOGGLE_ABOUT, RESTART_GAME} from '../actions';

const initialState = {
    answer: Math.floor(Math.random() * 100),
    guesses: [],
    about: false,
    feedback:'Guess a unique number between 0 and 100!',
    guess:''
};

export const hotColdReducer = (state=initialState, action) => {

  if(action.type === SUBMIT_GUESS) {
    return {
      ...state, guesses: [...state.guesses, action.guess]
    }
  }

  else if(action.type === UPDATE_GUESS) {
    return {
      ...state, guess: action.guess
    }
  }

  else if(action.type === UPDATE_FEEDBACK) {
    return {
      ...state, feedback: action.feedback
    }
  }

  else if(action.type === TOGGLE_ABOUT) {
    return {
      ...state, about: !state.about
    }
  }

  else if(action.type === RESTART_GAME) {
    return {
      ...state, ...initialState
    }
  }
  return state;
};
