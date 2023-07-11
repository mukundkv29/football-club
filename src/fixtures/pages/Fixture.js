import React from 'react'
import FixturesList from '../components/FixturesList';

import {DUMMY_FIXTURES} from '../../data/dummy-fixtures';

const Fixture = () => {
    
    return (
        <FixturesList items={DUMMY_FIXTURES} />
    )
}

export default Fixture;