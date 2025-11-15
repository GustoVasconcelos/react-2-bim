import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

let initialCounters = [0, 0, 0];

export default function CounterList() {
    const [counters, setCounters] = useState(initialCounters);

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                return c + 1;
            } else {
                return c;
            }
        });

        setCounters(nextCounters);
    }

    return (
        <>
        <div className="d-flex flex-column form-control mt-3">
            <h1>CounterList</h1>
            <ul className="list-group mt-3 mb-2">
                {counters.map((counter, i) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center"
                        key={i}>
                        {counter}
                        <button className="btn btn-secondary"
                            onClick={() => {
                            handleIncrementClick(i);
                            }}
                        >
                        +1
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}