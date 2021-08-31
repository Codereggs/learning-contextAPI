import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const initialLanguage = "es";
const initialAuth = false;
const translations = {
  es: {
    headerTitle: "Mi aplicación con Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application withContext API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);
  //console.log(texts);

  const handleLanguage = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations["es"]);
    } else {
      setLanguage("en");
      setTexts(translations["en"]);
    }
  };
  const handleAuth = () => {
    if (auth) setAuth(false);
    else setAuth(true);
  };
  return (
    <div className="myPage">
      <ThemeProvider>
        <HeaderContext
          texts={texts}
          handleLanguage={handleLanguage}
          auth={auth}
          handleAuth={handleAuth}
        />
        <MainContext texts={texts} auth={auth} />
        <FooterContext texts={texts} />
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
