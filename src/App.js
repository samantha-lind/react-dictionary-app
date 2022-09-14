import "./style.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <h1 className="page-title">Dictionary</h1>
        <Dictionary />
      </main>
      <footer className="footer">
        This is an open-source project coded by Samantha Lind
      </footer>
    </div>
  );
}

export default App;
