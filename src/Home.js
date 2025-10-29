import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link className="btn btn-primary mt-1" to="Atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link className="btn btn-primary mt-1" to="Atv02">Atividade 2</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Home;