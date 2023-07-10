import React from 'react'
import FixturesList from '../components/FixturesList';

const Fixture = () => {
    const FIXTURES = [
        {
            id: 'ARSCITY',
            date: '2023-08-10T15:00:00',
            venue: 'EMIRATES STADIUM',
            imageURL: 'https://www.arsenal.com/sites/default/files/styles/link_image_extra_large/public/images/stadium1.jpg?auto=webp&itok=Z_R79dMW',
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
        {
            id: 'LIVCITY',
            date: '2023-09-12T15:30:00',
            venue: 'ANFIELD STADIUM',
            imageURL: 'https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/acquiadam/2022-06/anfield-general-view-170622.webp?itok=J7kxIDw-&width=1680',
            teamHome: 'LIVERPOOL',
            teamAway: 'MANCHESTER CITY'
        },
    ]
    return (
        <FixturesList items={FIXTURES} />
    )
}

export default Fixture;