import ListGroup from "./components/ListGroup";
import LoginForm from "./components/LoginForm";
import "./App.css"

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 ">
      <div className="todo" >
        <h1 className="heading">TO DO APP</h1>
        <div className="border border-1 rounded d-flex" style={{ flex: 1 }}>
          <ListGroup></ListGroup>
        </div>
        {/* <LoginForm/> */}
      </div>
    </div>
  );
}
export default App;
