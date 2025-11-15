import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

function Button({ onClick, children }) {
    return (
        <button className="btn btn-secondary m-1" onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <>
        <div className="bg-black rounded-3 text-center p-2" onClick={() => { alert('You clicked on the toolbar!'); }}>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}