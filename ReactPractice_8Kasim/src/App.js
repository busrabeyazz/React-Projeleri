import "./App.css";
import ToDoList from "./ToDoList";
import Deneme from "./Deneme";
function App() {
  return (
    <div className="App">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <ToDoList />
          </div>
          <div class="col">
            <Deneme/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
