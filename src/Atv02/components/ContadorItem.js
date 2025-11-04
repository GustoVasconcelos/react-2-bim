import React from 'react';

export default function ContadorItem({ label, imagemSrc, count, onAdd, onSub }) {
    
    const labelStyle = {
        fontWeight: 'bold',
        fontFamily: 'Sans-serif'
    };
    
    const countStyle = {
        width: '80px',
        alignContent: 'center'
    };

    return (
        <div className="d-flex flex-column align-items-center p-3">
            <img src={imagemSrc} style={{ height: '100px' }} className="m-4" alt={label} />
            
            <div className="d-flex flex-row justify-content-center">
                <button className="btn-contador mais" onClick={onAdd}>+</button>
                <button className="btn-contador menos" onClick={onSub}>-</button>
            </div>
            
            <span style={labelStyle} className="mt-2">{label}</span>
            
            <span className="badge text-bg-secondary fs-6" style={countStyle}>
                {count}
            </span>
        </div>
    );
}