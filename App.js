import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    numHabitacion: '',
    tipoSangre: '', // Tipo de sangre después de número de habitación
    fechaIngreso: '',
    fechaSalida: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [registroCancelado, setRegistroCancelado] = useState(false);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    const camposObligatorios = ['nombre', 'apellidos', 'telefono', 'numHabitacion', 'tipoSangre', 'fechaIngreso', 'fechaSalida'];
    const errores = {};

    camposObligatorios.forEach((campo) => {
      if (!formData[campo]) {
        errores[campo] = 'Este campo es obligatorio';
      }
    });

    if (Object.keys(errores).length > 0) {
      setErrores(errores);
      return;
    }

    console.log(formData);

    // Realiza cualquier acción adicional aquí (por ejemplo, enviar datos al servidor)

    setRegistroExitoso(true);

    setTimeout(() => {
      setRegistroExitoso(false);
      reiniciarFormulario(); // Limpia los registros después de un tiempo
    }, 3000); // Cambia el tiempo según tus preferencias (en milisegundos)
  };

  const reiniciarFormulario = () => {
    setFormData({
      nombre: '',
      apellidos: '',
      telefono: '',
      numHabitacion: '',
      tipoSangre: '', // Limpia el tipo de sangre también
      fechaIngreso: '',
      fechaSalida: '',
    });
    setErrores({});
    setRegistroCancelado(false);
  };

  const cancelarRegistro = () => {
    setRegistroCancelado(true);

    setTimeout(() => {
      setRegistroCancelado(false);
      reiniciarFormulario(); // Limpia los registros después de un tiempo
    }, 1000); // Cambia el tiempo según tus preferencias (en milisegundos)
  };

  return (
    <div className="App">
      <h1>Registro de Hotel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre"style={{ fontSize: '18px' }}>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <div className="error">{errores.nombre}</div>}
        </div>
        <div>
          <label htmlFor="apellidos"style={{ fontSize: '18px' }}>Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
          {errores.apellidos && <div className="error">{errores.apellidos}</div>}
        </div>
        <div>
          <label htmlFor="telefono"style={{ fontSize: '18px' }}>Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          {errores.telefono && <div className="error">{errores.telefono}</div>}
        </div>
        <div>
          <label htmlFor="numHabitacion"style={{ fontSize: '18px' }}>Habitación:</label>
          <input
            type="text"
            id="numHabitacion"
            name="numHabitacion"
            value={formData.numHabitacion}
            onChange={handleChange}
          />
          {errores.numHabitacion && <div className="error">{errores.numHabitacion}</div>}
        </div>
        <div>
          <label htmlFor="tipoSangre"style={{ fontSize: '18px' }}>RH:</label>
          <select
            id="tipoSangre"
            name="tipoSangre"
            value={formData.tipoSangre}
            onChange={handleChange}
          >
            
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errores.tipoSangre && <div className="error">{errores.tipoSangre}</div>}
        </div>
        <div>
          <label htmlFor="fechaIngreso" style={{ fontSize: '18px' }}>Fecha de Ingreso:</label>
          <input
            type="date"
            id="fechaIngreso"
            name="fechaIngreso"
            value={formData.fechaIngreso}
            onChange={handleChange}
          />
          {errores.fechaIngreso && <div className="error">{errores.fechaIngreso}</div>}
        </div>
        <div>
          <label htmlFor="fechaSalida" style={{ fontSize: '18px' }}>Fecha de Salida:</label>
          <input
            type="date"
            id="fechaSalida"
            name="fechaSalida"
            value={formData.fechaSalida}
            onChange={handleChange}
          />
         {errores.fechaSalida && <div className="error">{errores.fechaSalida}</div>}
        </div>
        <button className="btn-registrar" type="submit">Registrar</button>
        <div style={{ margin: '1cm 0' }}></div>
        <button className="btn-cancelar" type="button" onClick={cancelarRegistro}>Cancelar Registro</button>
      </form>
      {registroExitoso && (
        <div className="alert-success">
          ¡Registrado con éxito!
        </div>
      )}
      {registroCancelado && (
        <div className="alert-danger">
          ¡Registro Cancelado!
        </div>
      )}
    </div>
  );
}

export default App;
