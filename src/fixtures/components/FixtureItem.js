import React from 'react'
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import { Figure } from 'react-bootstrap';

import './FixtureItem.css'; 

const FixtureItem = props => {
    const fixtureDate = new Date(props.date);
    const monthName = fixtureDate.toLocaleString('en-US', { month: 'long' });
    const formattedDate = `${fixtureDate.getDate()} ${monthName} ${fixtureDate.getFullYear()}, ${fixtureDate.toLocaleTimeString()}`;
    return (
        <li className='place-item'>
            <Card className='place-item__content'>
                <div className='place-item__image'>
                    <img src={props.imageURL} alt={props.venue} />
                </div>
                <div className='place-item__info'>  
                    <Figure.Image 
                    width={50}
                    height={50}
                    alt={props.teamHome.team}
                    src={props.teamHome.logo}
                    />
                    <h2>{`${props.teamHome.team}`}</h2>
                    <h2>VS</h2>
                    <h2>{`${props.teamAway.team}`}</h2>
                    <Figure.Image 
                    width={50}
                    height={50}
                    alt={props.teamAway.team}
                    src={props.teamAway.logo}
                    />
                    <h3>{formattedDate}</h3>
                </div>
                <div className='place-item__actions'>
                    <Button inverse>VIEW ON MAP</Button>
                    <Button to={`/book/${props.key}`}>BOOK TICKETS</Button>
                </div>
            </Card>
        </li>
    )
}



export default FixtureItem;