import { Link } from "react-router-dom";
import BtnVoltar from "../components/BtnVoltar";

export default function Atv03() {
    return(
        <>
            <h1>Atividades da Semana 3</h1>
            <nav className="text-center">
                <ul className="list-unstyled">
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.1">Atividade 1.1</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.2">Atividade 1.2</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.3">Atividade 1.3</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.4">Atividade 1.4</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.5">Atividade 1.5</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.6">Atividade 1.6</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.7">Atividade 1.7</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv03/1.8">Atividade 1.8</Link>
                    </li>
                </ul>
                <BtnVoltar />
            </nav>
        </>
    );
}