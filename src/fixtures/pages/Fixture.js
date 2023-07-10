import React from 'react'
import FixturesList from '../components/FixturesList';

const Fixture = () => {
    const FIXTURES = [
        {
            id: 'ARSCITY',
            date: '2023-08-10T15:00:00',
            venue: 'EMIRATES STADIUM',
            imageURL: 'https://unsplash.com/photos/FiQS31ztg-Y',
            teamHome: 'ARSENAL',
            teamAway: 'MANCHESTER CITY'
        },
        {
            id: 'CITYUTD',
            date: '2023-08-12T15:30:00',
            venue: 'ETIHAD STADIUM',
            imageURL: 'https://www.mancity.com/meta/media/5kxngsqy/etihad-in-the-evening-h480.jpg?width=1920&height=480&mode=crop',
            teamHome: 'MANCHESTER CITY',
            teamAway: 'MANCHESTER UNITED'
        },
    ]
    return (
        <FixturesList items={FIXTURES} />
    )
}

export default Fixture;