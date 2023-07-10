import React from 'react'

import FixtureItem from './FixtureItem'

import './FixturesList.css';

const FixturesList = props => {
    return (
        <ul className='fixture-list'>
            {props.items.map(fix => <FixtureItem
                key={fix.id}
                date={fix.date}
                venue={fix.venue}
                imageURL={fix.imageURL}
                teamHome={fix.teamHome}
                teamAway={fix.teamAway}
            />)}
        </ul>
    )
}


export default FixturesList 