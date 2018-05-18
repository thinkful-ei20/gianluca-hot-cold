import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header({restartGame, showAbout}) {
	return (
        <header>
            <TopNav restartGame={restartGame} showAbout={showAbout} />
    		<h1>HOT or COLD</h1>
		</header>
    );
}
