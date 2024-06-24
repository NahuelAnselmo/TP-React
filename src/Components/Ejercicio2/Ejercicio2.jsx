import PropTypes from 'prop-types'

const Ejercicio2 = (props) => {
    const { mensaje } = props;
  return (
    <h1>Hello {mensaje}</h1>
  )
}

Ejercicio2.propTypes = {
    mensaje: PropTypes.string.isRequired,
}
export default Ejercicio2