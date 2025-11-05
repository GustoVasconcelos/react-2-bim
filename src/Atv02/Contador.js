import React, { useState } from 'react';
import ContadorItem from './components/ContadorItem';
import './assets/css/Contador.css';
import BtnVoltar from '../components/BtnVoltar';
import ContadorTitulo from './components/ContadorTitulo';
import ContadorBtnReset from './components/ContadorBtnReset';

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
                        <ContadorTitulo 
                            tituloTotal={total}
                        />
                        <ContadorBtnReset 
                            onReset={handleReset}
                        />
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