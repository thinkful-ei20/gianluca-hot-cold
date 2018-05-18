
export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess
});

export const UPDATE_GUESS = 'UPDATE_GUESS';
export const updateGuess = guess => ({
  type: UPDATE_GUESS,
  guess
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = feedback => ({
  type: UPDATE_FEEDBACK,
  feedback
});


export const TOGGLE_ABOUT = 'TOGGLE_ABOUT';
export const toggleAbout = () => ({
  type: TOGGLE_ABOUT,
});


export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME,
});
