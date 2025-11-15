import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
        <h1>Counter</h1>
        <div className="d-flex justify-content-between align-items-center border border-info p-2 rounded-3">
            <h2 className="">{number}</h2>
            <button className="btn btn-secondary" onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>
                +3
            </button>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}