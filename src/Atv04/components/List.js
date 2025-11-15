import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";


let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
        <div className="d-flex flex-column form-control mt-3">
            <h1>Inspiring sculptors:</h1>
            <input className="form-control mb-2 mt-2"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button className="btn btn-secondary"
                onClick={() => {
                    setArtists([
                        ...artists,
                        { id: nextId++, name:name}
                    ]);
                }}
            >Add</button>
            <ul className="list-group mt-3 mb-2">
                {artists.map(artist => (
                    <li class="list-group-item" key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}