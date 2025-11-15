import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

//let nextId = 3;

const initalList = [
    { id: 0, title: "Big Bellies" },
    { id: 1, title: "Lunar Landscape" },
    { id: 2, title: "Terracotta Army" },
];

export default function List4() {
    const [list, setList] = useState(initalList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <><div className="d-flex flex-column form-control mt-3">
            <button className="btn btn-secondary mt-2"
                onClick={handleClick}>Reverse List</button>

            <ul className="list-group mt-3 mb-2">
                {list.map((artwork) => (
                <li class="list-group-item d-flex justify-content-between align-items-center"
                    key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}