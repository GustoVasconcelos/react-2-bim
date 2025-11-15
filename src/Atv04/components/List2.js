import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

let initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
];

export default function List2() {
    const [artists, setArtists] = useState(initialArtists);

    return (
        <>
        <div className="d-flex flex-column form-control mt-3">
            <h1>Inspiring sculptors:</h1>

            <ul className="list-group mt-3 mb-2">
                {artists.map((artist) => (
                <li class="list-group-item d-flex justify-content-between align-items-center" key={artist.id}>
                    {artist.name}{" "}
                    <button className="btn btn-secondary"
                    onClick={() => {
                        setArtists(artists.filter((a) => a.id !== artist.id));
                    }}
                    >
                    Delete
                    </button>
                </li>
                ))}
            </ul>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}