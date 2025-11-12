import { Link } from "react-router-dom";

export function BtnVoltarAtv03() {
    return(
        <Link className="btn btn-secondary mt-1" to="/Atv03">Voltar</Link>
    );
}

export default function BtnVoltar() {
    return(
        <Link className="btn btn-secondary mt-1" to="/">Voltar</Link>
    );
}