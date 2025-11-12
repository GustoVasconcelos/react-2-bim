import { BtnVoltarAtv03 } from "../../components/BtnVoltar";

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

export default function Atividade11() {
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