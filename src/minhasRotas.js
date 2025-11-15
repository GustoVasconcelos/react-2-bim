import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atv01/Atv01";
import Atv02 from "./Atv02/Atv02";
import Atv03 from "./Atv03/Atv03";
import Atv04 from "./Atv04/Atv04";

// Rotas das atividades da semana3
import Atividade11 from "./Atv03/1.1/1.1";
import Atividade12 from "./Atv03/1.2/1.2";
import Atividade13 from "./Atv03/1.3/1.3";
import Atividade14 from "./Atv03/1.4/1.4";
import Atividade15 from "./Atv03/1.5/1.5";
import Atividade16 from "./Atv03/1.6/1.6";
import Atividade17 from "./Atv03/1.7/1.7";
import Atividade18 from "./Atv03/1.8/1.8";

// Rotas das atividades da semana4
import Toolbar from "./Atv04/components/Toolbar";
import Gallery from "./Atv04/components/Gallery";
import Counter from "./Atv04/components/Counter";
import Form from "./Atv04/components/Form";
import MovingDot from "./Atv04/components/MovingDot";
import Form2 from "./Atv04/components/Form2";
import Form3 from "./Atv04/components/Form3";
import List from "./Atv04/components/List";
import List2 from "./Atv04/components/List2";
import ShapeEditor from "./Atv04/components/ShapeEditor";
import CounterList from "./Atv04/components/CounterList";
import List3 from "./Atv04/components/List3";
import List4 from "./Atv04/components/List4";
import BucketList from "./Atv04/components/BucketList";

export default function MinhasRotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv01" element={<Atv01 />} />
                <Route path="/Atv02" element={<Atv02 />} />
                <Route path="/Atv03" element={<Atv03 />} />
                <Route path="/Atv04" element={<Atv04 />} />

                <Route path="/Atv03/1.1" element={<Atividade11 />} />
                <Route path="/Atv03/1.2" element={<Atividade12 />} />
                <Route path="/Atv03/1.3" element={<Atividade13 />} />
                <Route path="/Atv03/1.4" element={<Atividade14 />} />
                <Route path="/Atv03/1.5" element={<Atividade15 />} />
                <Route path="/Atv03/1.6" element={<Atividade16 />} />
                <Route path="/Atv03/1.7" element={<Atividade17 />} />
                <Route path="/Atv03/1.8" element={<Atividade18 />} />

                <Route path="/Atv04/Toolbar" element={<Toolbar />} />
                <Route path="/Atv04/Gallery" element={<Gallery />} />
                <Route path="/Atv04/Counter" element={<Counter />} />
                <Route path="/Atv04/Form" element={<Form />} />
                <Route path="/Atv04/MovingDot" element={<MovingDot />} />
                <Route path="/Atv04/Form2" element={<Form2 />} />
                <Route path="/Atv04/Form3" element={<Form3 />} />
                <Route path="/Atv04/List" element={<List />} />
                <Route path="/Atv04/List2" element={<List2 />} />
                <Route path="/Atv04/ShapeEditor" element={<ShapeEditor />} />
                <Route path="/Atv04/CounterList" element={<CounterList />} />
                <Route path="/Atv04/List3" element={<List3 />} />
                <Route path="/Atv04/List4" element={<List4 />} />
                <Route path="/Atv04/BucketList" element={<BucketList />} />
            </Routes>
        </BrowserRouter>
    );
}