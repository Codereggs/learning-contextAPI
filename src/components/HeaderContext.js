import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = ({ auth, handleAuth }) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es" default>
          ES
        </option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light-context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth === false ? texts.buttonLogin : texts.buttonLogout}
      </button>
    </header>
  );
};

export default HeaderContext;
