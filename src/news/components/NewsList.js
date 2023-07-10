import React from 'react'
import NewsItem from './NewsItem';

import './NewsList.css'
export const NewsList = (props) => {
  return (
    <ul className='place-list'>
        {props.items.map(n=><NewsItem 
            key={n.headline}
            headline={n.headline}
            imageURL = {n.imageURL}
        />)}
    </ul>
  )
};

