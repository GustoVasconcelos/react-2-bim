import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atv01/Atv01";
import Atv02 from "./Atv02/Atv02";
import Atv03 from "./Atv03/Atv03";
import Atividade11 from "./Atv03/1.1/1.1";
import Atividade12 from "./Atv03/1.2/1.2";
import Atividade13 from "./Atv03/1.3/1.3";
import Atividade14 from "./Atv03/1.4/1.4";
import Atividade15 from "./Atv03/1.5/1.5";
import Atividade16 from "./Atv03/1.6/1.6";
import Atividade17 from "./Atv03/1.7/1.7";
import Atividade18 from "./Atv03/1.8/1.8";

export default function MinhasRotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv01" element={<Atv01 />} />
                <Route path="/Atv02" element={<Atv02 />} />
                <Route path="/Atv03" element={<Atv03 />} />
                <Route path="/Atv03/1.1" element={<Atividade11 />} />
                <Route path="/Atv03/1.2" element={<Atividade12 />} />
                <Route path="/Atv03/1.3" element={<Atividade13 />} />
                <Route path="/Atv03/1.4" element={<Atividade14 />} />
                <Route path="/Atv03/1.5" element={<Atividade15 />} />
                <Route path="/Atv03/1.6" element={<Atividade16 />} />
                <Route path="/Atv03/1.7" element={<Atividade17 />} />
                <Route path="/Atv03/1.8" element={<Atividade18 />} />
            </Routes>
        </BrowserRouter>
    );
}