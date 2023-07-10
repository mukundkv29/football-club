import React from 'react'
import Card from '../../shared/components/UIElements/Card';

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
                    <button>VIEW ON MAP</button>
                    <button>BOOK TICKET</button>
                </div>
            </Card>
        </li>
    )
}



export default FixtureItem;