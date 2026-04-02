

function Card() {
    return (
        <div className="card">
            <div className="image" style={{backgroundImage: "url('')"}}></div>
            <div className="info">
                <h2>Hermione Granger</h2>
                <p>Actor: Emma Watson</p>
                <p>Gender: female</p>
                <p>House: Gryffindor</p>
                <p>Wand core: dragon heartstring</p>
                <p>Alive: yes</p>
            </div>
        </div>
    )
}

export default Card