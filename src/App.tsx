import ListGroup from "./components/ListGroup";
import LoginForm from "./components/loginForm/LoginForm";
import "./App.css"

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 ">
      <div className="todo" >
        <h1 className="heading">TO DO APP</h1>
        {/* <div className="border border-1 rounded d-flex" style={{ flex: 1 }}>
          <ListGroup></ListGroup>
          
        </div> */}
        <div className="d-flex" style={{ flex: 1 }}>
          <LoginForm/>
          
        </div>
        
      </div>
    </div>
  );
}
export default App;
