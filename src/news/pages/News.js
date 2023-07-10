import React from 'react'
import { NewsList } from '../components/NewsList';

function News() {
    const NEWS=[
        {
            headline:"2023 Women's World Cup: Who's playing where?",
            imageURL:'https://www.mancity.com/meta/media/o3lfat3e/fa1.jpg?width=1136'
        },
        {
            headline:"Loan round-up: 2022/23 season ",
            imageURL:'https://www.mancity.com/meta/media/dhrhae2v/thb.jpg?width=1136'
        },
    ]
    return <NewsList items={NEWS}/>;
}

export default News;