import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({actualizarGasto,guardarCrearGasto}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
  

    const agregarGasto = e => {
        e.preventDefault();
        if (cantidad < 0 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        const gasto={
            nombre,
            cantidad,
            id: shortid.generate()
        }
        console.log(gasto);
        actualizarGasto(gasto);
        guardarCrearGasto(true);
        setNombre('');
        setCantidad(0);

    };
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? (<Error mensaje="Ambos campos son obligatorios" />) : null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input type="text"
                    placeholder="Ej. transporte"
                    className="u-full-width"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input type="number"
                    placeholder="Ej. 300"
                    className="u-full-width"
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto" />
        </form>
    );
};
Formulario.propTypes={
    actualizarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
export default Formulario;