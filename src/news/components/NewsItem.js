import React from 'react'
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './NewsItem.css'; 

const NewsItem = props => {
    return (
        <li className='place-item'>
            <Card className='place-item__content'>
                <div className='place-item__image'>
                    <img src={props.imageURL} alt={props.headline} />
                </div>
                <div className='place-item__info'>  
                    <h3>{props.headline}</h3>
                </div>
                <div className='place-item__actions'>
                    <Button inverse>READ MORE</Button>
                </div>
            </Card>
        </li>
    )
}



export default NewsItem;