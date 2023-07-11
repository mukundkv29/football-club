import PlayersList from "../components/PlayersList";

import { DUMMY_PLAYERS } from "../../data/dummy-players";

const Players = () => {
    
    return <PlayersList items={DUMMY_PLAYERS} />
};

export default Players;