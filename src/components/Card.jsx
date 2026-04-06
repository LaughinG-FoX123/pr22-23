

function Card({characters}) {
    return (
        <div className="card">
            <div className="image" style={{backgroundImage: 'url(`${characters.img}`)'}}></div>
            <div className="info">
                <h2>{characters.name}</h2>
                <p>Actor: {characters.actor}</p>
                <p>Gender: {characters.gender}</p>
                <p>House: {characters.house}</p>
                <p>Wand core: {characters.wand}</p>
                <p>Alive: {characters.alive}</p>
            </div>
        </div>
    )
}

export default Card