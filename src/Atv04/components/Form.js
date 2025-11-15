import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

export default function Form() {
    const [to, setTo] = useState("Alice");
    const [message, setMessage] = useState("Hello!");

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-control d-flex flex-column gap-3 mt-3 mb-2">
                <h1 className="text-xl font-bold text-center">Form</h1>
                <label className="form-label">
                    <div className="d-flex align-items-center">
                        To:{" "}
                        <select className="form-select ms-2" value={to} onChange={(e) => setTo(e.target.value)}>
                            <option value="Alice">Alice</option>
                            <option value="Bob">Bob</option>
                        </select>
                    </div>
                </label>
                <textarea className="form-control" style={{ resize: 'none' }}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit" className="btn btn-secondary mb-2">
                Send
                </button>
            </form>
            <BtnVoltarAtv04 />
        </div>
    );
}