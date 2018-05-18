import React, {Component} from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends Component {

	constructor(props) {
		super(props);
		this.state = {
			answer: Math.floor(Math.random() * 100),
			guesses: [],
			win: false,
			about: false,
			feedback:'Guess a unique number between 0 and 100!',
			guess:'',
		};
	}

	getFeedBack() {

		let feedback;
		const guesses = this.state.guesses;
		const answer = this.state.answer;

		const lastGuess = guesses[guesses.length -1];
		const difference = Math.abs(answer - lastGuess);
		
		if(difference === 0) {
			feedback = 'YOU WIN! if youd like to play again, press NEW GAME';
		} else if(difference <= 5) {
			feedback = 'VERY hot';
		} else if(difference >5 && difference <= 10) {
			feedback = 'Hot';
		} else if(difference >10 && difference <= 15) {
			feedback = 'Warm';
		} else if (difference > 15 && difference <= 20) {
			feedback = 'Cold';
		} else {
			feedback = 'Ice Cold';
		}
	}

	verfiyDuplicate(value) {
		return this.state.guesses.includes(value);
	}

	proccessSubmit(e) {
		e.preventDefault();
		let guess = +this.state.guess; //coersion
		if(guess && (guess > 0 && guess <= 100) && !this.verfiyDuplicate(guess)) {
			this.setState({guesses:[...this.state.guesses, guess]})
		} else {
			alert('Input must be a unique number between 0 and 100(inclusive)');
		}
		this.setState({guess:''});
	}

	updateUserInput(e) {
		this.setState({guess: e.target.value});
	}

	updateModal(){
		this.setState({
			about: !this.state.about
		});
	}

	restartGame(){
		this.setState({
			answer: Math.floor(Math.random() * 100),
			guesses: [],
			win: false,
			about: false,
			feedback:'Guess a unique number between 0 and 100!',
			guess:'',
		});
	}

	render(){
		if(this.state.about) {
			return <InfoModal showAbout={() => this.updateModal} />;
		}
		return (
			<div>
				<Header restartGame={() => this.restartGame} about={this.state.about} showAbout={() => this.updateModal}/>
				<GuessSection feedback={this.state.feedback} onChange={(e) => this.updateUserInput(e)} value={this.state.guess} onSubmit={(e) => this.proccessSubmit(e)}/>
				<GuessCount count={this.state.guesses.length} />
				<GuessList guesses={this.state.guesses} />
			</div>
		);
	}
}

