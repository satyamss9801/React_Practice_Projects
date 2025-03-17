import Todo from './components/Todo';
import AddForm from './components/addForm';
import './App.css';
import { Provider } from "react-redux";
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div id="root">
        <div className="card">
          <AddForm />
        </div>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
