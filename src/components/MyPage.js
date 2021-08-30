import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <div className="myPage">
      <Header theme={theme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default MyPage;
