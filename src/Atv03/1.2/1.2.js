import { BtnVoltarAtv03 } from "../../components/BtnVoltar";

function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

export default function Atividade12() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            <br />
            <BtnVoltarAtv03 />
        </section>
    );
}