import "./style.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <h1 className="page-title">Dictionary</h1>
      </main>
      <Dictionary />
      <footer className="footer">
        This is an{" "}
        <a
          href="https://github.com/samantha-lind/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-source project
        </a>{" "}
        coded by Samantha Lind
      </footer>
    </div>
  );
}

export default App;
