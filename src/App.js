import "./App.css";
import Header from "./Component/Header";
import TaskForm from "./Component/TaskForm";
import TaskList from "./Component/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
