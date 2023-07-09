const PlayerItem = props =>{
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__imgae">
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className="usesr-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.position}</h3>
                    <h3>{props.country}</h3>
                    <h3>{props.id}</h3>
                </div>
            </div>
        </li>
    );
}

export default PlayerItem;