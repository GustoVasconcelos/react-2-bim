import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

let nextId = 3;

const initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
];

export default function List3() {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState(initialArtists);

    function handleClick() {
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),

            { id: nextId++, name: name },

            ...artists.slice(insertAt),
        ];

        setArtists(nextArtists);
        setName("");
    }

    return (
        <>
        <div className="d-flex flex-column form-control mt-3">
            <h1 className="text-xl font-bold">Inspiring sculptors:</h1>
            <label className="form-label mt-3">
                <input className="form-control"
                    value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button className="btn btn-secondary"
                onClick={handleClick}>Insert</button>

            <ul className="list-group mt-3 mb-2">
                {artists.map((artist) => (
                <li class="list-group-item d-flex justify-content-between align-items-center"
                    key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}