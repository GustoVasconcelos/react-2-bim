import BtnVoltar from "../components/BtnVoltar";
import Gallery from "./components/Gallery";
import Toolbar from "./components/Toolbar";

export default function Atv04() {
    return (
        <>
            <h1 className="text-center">Atividades da Semana 4</h1>
            <p className="mt-2">Toolbar</p>
            <Toolbar />
        
            <p className="mt-2">Gallery</p>
            <Gallery />

            <BtnVoltar />
        </>
    );
}