import React, { useState, useEffect } from 'react';
import Pregunta from './componentes/Pregunta';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import ControlPresupuesto from './componentes/ControlPresupuesto';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, actualizarGastos] = useState([]);
  const [gasto, actualizarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  useEffect(()=>{
    if(crearGasto){
      actualizarGastos([...gastos, gasto]);
      guardarCrearGasto(false);
      const presupuestoRestante= restante-gasto.cantidad;
      setRestante(presupuestoRestante);
    }
  },[gasto,gastos,crearGasto,restante])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido contenido-principal">
          {mostrarPregunta ?
            (
              <Pregunta
                guardarPresupuesto={setPresupuesto}
                guardarRestante={setRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    actualizarGasto={actualizarGasto} 
                    guardarCrearGasto={guardarCrearGasto}/>
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos}
                  />
                  <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}/>
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
