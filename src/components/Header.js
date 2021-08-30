const Header = ({ theme }) => {
  return (
    <header className={theme}>
      <h2>Mi Aplicación sin Context API</h2>
      <h3>Mi cabecera</h3>
      <select name="language">
        <option value="es" default>
          ES
        </option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light" value="light" />
      <label htmlFor="light">Claro</label>
      <input type="radio" name="theme" id="dark" value="dark" />
      <label htmlFor="dark">Oscuro</label>
      <button>Iniciar Sesión</button>
    </header>
  );
};

export default Header;
