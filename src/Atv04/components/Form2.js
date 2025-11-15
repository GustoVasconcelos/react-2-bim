import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: "Barbara",
        lastName: "Hepworth",
        email: "bhepworth@sculpture.com",
    });

    function handleChange(e) {
        setPerson({
        ...person,
        [e.target.name]: e.target.value,
        });
    }

    return (
        <>
        <div className="d-flex flex-column form-control mt-3">
            <h1 className="text-xl font-bold text-center">Form2</h1>
            <label className="form-label">
                First name:
                <input className="form-control"
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label className="form-label">
                Last name:
                <input className="form-control"
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />
            </label>
            <label className="form-label">
                Email:
                <input className="form-control"
                    name="email" 
                    value={person.email} 
                    onChange={handleChange} 
                />
            </label>
            <p>
                {person.firstName} {person.lastName} ({person.email})
            </p>
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}