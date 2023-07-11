import React from 'react'
import { NewsList } from '../components/NewsList';
import { DUMMY_NEWS } from '../../data/dummy-news';
function News() {
    
    return <NewsList items={DUMMY_NEWS}/>;
}

export default News;