import React from 'react';

export default function ContadorTitulo({ tituloTotal }) {
    return (
        <>
        <h2 className="text-center flex-grow-1">Total</h2>
        <span className="badge text-bg-secondary fs-6 contador-total-badge">
            {tituloTotal}
        </span>
        </>
    );
}