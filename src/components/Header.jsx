import React from 'react';
import kimsKidsChalkboard from 'src/static/kims_kids_chackboard.png';

import '../app.scss';

export const Header = () => {

    return (
        <header>
            <img alt="Kim's Kids Educational Consulting and Advocacy" src={kimsKidsChalkboard}/>
        </header>
    )
}