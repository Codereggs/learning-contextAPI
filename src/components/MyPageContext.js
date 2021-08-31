import { useState } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const initialAuth = false;

const MyPageContext = () => {
  const [auth, setAuth] = useState(initialAuth);
  //console.log(texts);

  const handleAuth = () => {
    if (auth) setAuth(false);
    else setAuth(true);
  };
  return (
    <div className="myPage">
      <ThemeProvider>
        <LanguageProvider>
          <HeaderContext auth={auth} handleAuth={handleAuth} />
          <MainContext auth={auth} />
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
