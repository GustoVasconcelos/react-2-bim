import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <h1>Atividades de React - 2 Bim</h1>
            <nav className="text-center">
                <ul className="list-unstyled">
                    <li>
                        <Link className="btn btn-secondary mt-1" to="Atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link className="btn btn-secondary mt-1" to="Atv02">Atividade 2</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Home;