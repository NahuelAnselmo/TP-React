import PropTypes from 'prop-types'
import { useState } from 'react';

const Ejercicio3 = (props) => {
  const { mensaje: propsMensaje } = props;

  const [mensaje, setMensaje] = useState(propsMensaje);

  const handleChange = () => {
    setMensaje((state) => state + ' (from changed state)!');
  };

  return (
    <>
      <h1>Hello {mensaje}</h1>
      <button onClick={handleChange} className='btn btn-primary mt-3'>Click me!</button>
    </>
  );
};
Ejercicio3.propTypes = {
    mensaje: PropTypes.string.isRequired,
}
export default Ejercicio3
