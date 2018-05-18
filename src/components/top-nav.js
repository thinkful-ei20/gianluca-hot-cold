import React from 'react';
import './top-nav.css';

export default function TopNav({showAbout, restartGame}) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={showAbout}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={restartGame}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

