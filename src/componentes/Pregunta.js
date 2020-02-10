import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante,actualizarPregunta}) => {
    const [cantidad, guardarCantidad] = useState(0);
    const [error, SetError] = useState(false);
    const definirPresupuesto = e => {
        e.preventDefault();
        console.log(e.target.value);
        guardarCantidad(parseInt(e.target.value, 10));
    }
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        if(cantidad<0 || isNaN(cantidad)){
            SetError(true);
            return;
        }
        SetError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/> :null}
            <form onSubmit={agregarPresupuesto}>
                <input type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                    value={cantidad}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
};
Pregunta.propTypes={
    guardarPresupuesto : PropTypes.func.isRequired,
    guardarRestante : PropTypes.func.isRequired,
    actualizarPregunta : PropTypes.func.isRequired
}
export default Pregunta;