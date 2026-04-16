

function Card({character}) {
    return (
        <div className="card">
            <div className="image">
                <img src={character.img} alt="" />
            </div>
            <div className="info">
                <h2>{character?.name}</h2>
                <p>Actor: {character?.actor}</p>
                <p>Gender: {character?.gender}</p>
                <p>House: {character?.house}</p>
                <p>Wand core: {character?.wand}</p>
                <p>Alive: {character?.alive ? "жив" : "мёртв"}</p>
            </div>
        </div>
    )
}

export default Card