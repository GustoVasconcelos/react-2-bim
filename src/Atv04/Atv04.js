import { Link } from "react-router-dom";
import BtnVoltar from "../components/BtnVoltar";

export default function Atv04() {
    return (
        <>
            <h1>Atividades da Semana 4</h1>
            <nav className="text-center">
                <ul className="list-unstyled">
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/Toolbar">Toolbar</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/Gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/Counter">Counter</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/Form">Form</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/MovingDot">MovingDot</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/Form2">Form2</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/Form3">Form3</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/List">List</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/List2">List2</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/ShapeEditor">ShapeEditor</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/CounterList">CounterList</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/List3">List3</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/List4">List4</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="/Atv04/BucketList">BucketList</Link>
                    </li>
                </ul>
                <BtnVoltar />
            </nav>
        </>
    );
}