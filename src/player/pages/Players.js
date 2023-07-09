import PlayersList from "../components/PlayersList";

const Players = () => {
    const PLAYER = [{
        name: 'ERLING HAALAND',
        number: '9',
        position: 'forward',
        country: 'Norway',
        photo: 'https://www.mancity.com/meta/media/e2lawnab/erling-haaland.png?width=376&quality=100'
    }, {
        name: 'KEVIN DE BRUYNE',
        number: '17',
        position: 'midfilelder',
        country: 'BELGIUM',
        photo: 'https://www.mancity.com/meta/media/i0fhd2ed/kevin-de-bruyne.png?width=376&quality=100'
    }, {
        name: 'RUBEN DIAS',
        number: '3',
        position: 'defender',
        country: 'Portugal',
        photo: 'https://www.mancity.com/meta/media/vw0b1q45/ruben-dias.png?width=376&quality=100'
    }
    ];
    return <PlayersList items={PLAYER} />
};

export default Players;