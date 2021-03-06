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
			about: false,
			feedback:'Guess a unique number between 0 and 100!',
			guess:'',
		};
	}

	getFeedBack() {

		let feedback;

		const answer = this.state.answer;

		const lastGuess = +this.state.guess;

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
		this.setState({feedback, guess:''});
	}

	verfiyDuplicate(value) {
		return this.state.guesses.includes(value);
	}

	onSubmit = (e) => {
		e.preventDefault();
		let guess = +this.state.guess; //coersion
		if(guess && (guess > 0 && guess <= 100) && !this.verfiyDuplicate(guess)) {
			this.setState({guesses:[...this.state.guesses, guess]}, this.getFeedBack());
		} else {
			alert('Input must be a unique number between 0 and 100(inclusive)');
		}
	}

	updateGuess = (e) => {
		this.setState({guess: e.target.value});
	}

	toggleAboutModal = () => {
		this.setState({
			about: !this.state.about
		});
	}

	restartGame = () =>{
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
			return <InfoModal toggleAbout={this.updateModal} />;
		}
		return (
			<div>
				<Header restartGame={this.restartGame} about={this.state.about} toggleAbout={this.toggleAboutModal}/>
				<GuessSection feedback={this.state.feedback} onChange={this.updateGuess} value={this.state.guess} onSubmit={this.onSubmit}/>
				<GuessCount count={this.state.guesses.length} />
				<GuessList guesses={this.state.guesses} />
			</div>
		);
	}
}
