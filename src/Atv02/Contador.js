import React, { useState } from 'react';
import ContadorItem from './components/ContadorItem';
import './assets/css/Contador.css';
import BtnVoltar from '../components/BtnVoltar';

export default function Contador() {
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const total = homens + mulheres;

    const handleAddHomem = () => setHomens(h => h + 1);
    const handleSubHomem = () => setHomens(h => (h > 0 ? h - 1 : 0));
    
    const handleAddMulher = () => setMulheres(m => m + 1);
    const handleSubMulher = () => setMulheres(m => (m > 0 ? m - 1 : 0));

    const handleReset = () => {
        setHomens(0);
        setMulheres(0);
    };

    return (
        <div className="contador-wrapper mt-3">
            <div className="contador-container mb-3">
                <div className="contador-central">
                    
                    <div className="contador-titulo">
                        <h2 className="text-center flex-grow-1">Total</h2>
                        <span className="badge text-bg-secondary fs-6 contador-total-badge">
                            {total}
                        </span>
                        <button className="mt-2 btn btn-secondary" onClick={handleReset}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                            </svg> Reset
                        </button>
                    </div>

                    <div className="d-flex flex-row align-items-start justify-content-center">
                        <ContadorItem
                            label="Homens"
                            imagemSrc="images/man.png"
                            count={homens}
                            onAdd={handleAddHomem}
                            onSub={handleSubHomem}
                        />
                        <ContadorItem
                            label="Mulheres"
                            imagemSrc="images/woman.png"
                            count={mulheres}
                            onAdd={handleAddMulher}
                            onSub={handleSubMulher}
                        />
                    </div>
                </div>
            </div>

            <BtnVoltar />
        </div>
    );
}