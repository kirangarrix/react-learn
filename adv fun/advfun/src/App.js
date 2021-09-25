import Form from "./Hooks/Form";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import UseReducer from './Hooks/UseReducer';
import ContextAPI from './Hooks/prop-drilling/ContextAPI';
import Fetch from  './Hooks/Fetch/Fetch';
import Indexx from './Hooks/Router/index';
function App() {
  return (
    <div className="container">
    <UseState/>
    <UseEffect/>
    <Form/>
    <UseRef/>
    <UseReducer/>
    <ContextAPI/>
    <Fetch/>
    <Indexx/>
    </div>
  );
}

export default App;
