import React from 'react'
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './FixtureItem.css'; 

const FixtureItem = props => {
    return (
        <li className='place-item'>
            <Card className='place-item__content'>
                <div className='place-item__image'>
                    <img src={props.imageURL} alt={props.venue} />
                </div>
                <div className='place-item__info'>  
                    <h2>{`${props.teamHome} vs ${props.teamAway}`}</h2>
                    <h3>{props.date}</h3>
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