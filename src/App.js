import "./App.css";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <div className="App">
      <a
        href="https://es.reactjs.org/docs/context.html"
        rel="noreferrer"
        target="_blank"
      >
        <h1>React Context API</h1>
      </a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
