import { BtnVoltarAtv03 } from "../../components/BtnVoltar";

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function Atividade14() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img 
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
                className="photo"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
            <br />
            <BtnVoltarAtv03 />
        </div>
    );
}