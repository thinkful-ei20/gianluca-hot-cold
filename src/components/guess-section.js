import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection({feedback, onSubmit, value, onChange}) {

	return (
        <section>
            <h2 id="feedback">{feedback}</h2>
            <GuessForm  onSubmit={onSubmit} value={value} onChange={onChange}/>
        </section>
    );
}

