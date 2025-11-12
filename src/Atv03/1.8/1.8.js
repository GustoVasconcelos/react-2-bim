import { BtnVoltarAtv03 } from "../../components/BtnVoltar";

function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function Atividade18() {
    let cups = [];
    for (let i = 1; i <= 5; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return (
        <>
        {cups}
        <BtnVoltarAtv03 />
        </>
    );
}