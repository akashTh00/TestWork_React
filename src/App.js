import "./styles.css";
import Header from "./Component/Header";
import Home from "./Component/Home";

function MyComponent({ name, nameForClass }) {
  // destructure
  return (
    <>
      <div className={nameForClass}>{name}</div>
      <hr />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
