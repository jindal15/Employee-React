import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Router from './Router.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
