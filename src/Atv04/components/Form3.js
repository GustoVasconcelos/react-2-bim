import { useState } from "react";
import { BtnVoltarAtv04 } from "../../components/BtnVoltar";

export default function Form3() {
    const [sculpture, setSculpture] = useState({
        name: "Niki de Saint Phalle",
        title: "Blue Nana",
        city: "Hamburg",
        image: "https://i.imgur.com/Sd1AgUOm.jpg",
    });

    function handleChange(e) {
            setSculpture({
            ...sculpture,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
        <div className="d-flex flex-column form-control mt-3 mb-2">
            <h1 className="text-xl font-bold text-center">Form3</h1>
            <label className="form-label">
                Name:
                <input className="form-control" name="name" value={sculpture.name} onChange={handleChange} />
            </label>
            <label className="form-label">
                Title:
                <input className="form-control" name="title" value={sculpture.title} onChange={handleChange} />
            </label>
            <label className="form-label">
                City:
                <input className="form-control" name="city" value={sculpture.city} onChange={handleChange} />
            </label>
            <label className="form-label">
                Image:
                <input className="form-control" name="image" value={sculpture.image} onChange={handleChange} />
            </label>
            <p>
                <b>{sculpture.title}</b> by {sculpture.name}
                <br />
                (located in {sculpture.city})
            </p>
            <img className="mb-2" src={sculpture.image} alt={sculpture.title} />
        </div>
        <BtnVoltarAtv04 />
        </>
    );
}