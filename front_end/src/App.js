import logo from "./logo.svg";
import "./App.css";
import WorkoutFormCreate from "./components/WorkoutFormCreate";
import WorkoutForm from "./components/WorkoutForm";
import Bar from "./components/ResponsiveAppBar";
import ExpandingButton from "./components/addButton";
import Modal from "./components/modal";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      {/* <WorkoutForm /> */}
      <Bar />
      <Modal />

      <Table />
      {/* <WorkoutForm /> */}
      {/* <ExpandingButton /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
