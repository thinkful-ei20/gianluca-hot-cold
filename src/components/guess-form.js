import React from 'react';

import './guess-form.css';

export default function GuessForm ({onChange, value, onSubmit}) {

	return (
        <form onSubmit={onSubmit}>
			<input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" onChange={onChange} value={value}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}
