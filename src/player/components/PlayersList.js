import PlayerItem from "./PlayerItem";

import './PlayersList.css';

const PlayersList = props => {
    if (props.items.length === 0) {
        return (<div className="center">
            <h2>No Player(s) found</h2>
        </div>)
    }

    return <ul className="users-list">
        {props.items.map(player => (
            <PlayerItem
                key={player.number}
                id={player.number}
                name={player.name}
                image={player.image}
                position={player.position}
                country={player.country}
            />
        ))}
    </ul>
};

export default PlayersList;
