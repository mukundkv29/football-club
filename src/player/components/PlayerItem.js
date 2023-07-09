
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

import './PlayerItem.css';

const PlayerItem = props => {
    return (
        <li className="user-item">
            <Card className='user-item__content'>
                <Link>
                    <div className='user-item__image'>
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.position.toUpperCase()}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
}

export default PlayerItem;