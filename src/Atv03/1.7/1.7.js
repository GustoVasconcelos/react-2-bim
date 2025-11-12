import { BtnVoltarAtv03 } from "../../components/BtnVoltar";
import { getImageUrl } from "../../components/utils";
import { people } from "./data";

export default function Atividade17() {
    /* const listItems = people.map(person =>  */ // comentando as 2 linhas de baixo e descomentando essa, exibe todos os dados
    const chemist = people.filter(person => person.profession === 'chemist');
    const listItems = chemist.map(person => 
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <>
            <ul>
                {listItems}
            </ul>
            <BtnVoltarAtv03 />
        </>
        
    );
}