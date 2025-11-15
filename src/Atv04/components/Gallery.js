import { useState } from "react";
import { sculptureList } from "../data";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    // verifica se há dados antes de tudo
    const hasSculptures = sculptureList && sculptureList.length > 0;
    // senao tiver dados, retorna mensagem de "Sem dados"
    if (!hasSculptures) return <p>Sem dados.</p>;

    function handleNextClick() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
        <div className="bg-black flex flex-col mt-1">
            <button 
                className="btn btn-secondary mt-2"
                onClick={handleNextClick}
            >
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button
                className="btn btn-secondary mb-2"
                onClick={handleMoreClick}
            >
                {showMore? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <p>
            <img
                src={sculpture.url}
                alt={sculpture.alt} 
            />
            </p>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}