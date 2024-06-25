import { useRef, useState } from "react";
import "./Ejercicio4.css";

const Ejercicio4 = () => {
  const [todos, setTodos] = useState([]);
  const $input = useRef();

  const handleNewTodo = () => {
    const nuevoTodo = $input.current.value;

    if (nuevoTodo.trim()) {
      const nuevoArreglo = [...todos, nuevoTodo];
      setTodos(nuevoArreglo);
      $input.current.value = '';
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNewTodo();
    }
  };

  return (
    <section className="container mt-5 w-50">
      <fieldset className="contenedor text-center">
        {/* Creacion de tareas */}
        <h1 className="text-center">Bienvenido</h1>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <label className="me-2">Ingresa tu nueva tarea:</label>
          <input
            type="text"
            ref={$input}
            onKeyPress={handleKeyPress}
            className="form-control"
          />
          <button onClick={handleNewTodo} className="btn btn-primary ms-2">
            Cargar
          </button>
        </div>
      </fieldset>

      {/* Listado de tareas */}
      <ul className="list-group d-flex justify-content-center align-items-center mb-3">
        {todos.map((todo, index) => (
          <li key={index} className="list">
            {todo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ejercicio4;
