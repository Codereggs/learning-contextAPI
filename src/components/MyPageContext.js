import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="myPage">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
          </AuthProvider>
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
