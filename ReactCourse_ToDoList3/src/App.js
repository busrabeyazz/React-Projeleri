
import './App.css';
import Counter from './Counter';
import ToDoList from './ToDoList';
import Update from './Update';
function App() {
  return (
    <div className="App">
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <Counter/>
    </div>
    <div class="col">
    <ToDoList/>
    </div>
    <div class="col">
      <Update />
    </div>
  </div>
</div>
      
      
      
    </div>
  );
}

export default App;
