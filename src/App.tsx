import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import ListGroup from "./components/listGroup/ListGroup"; // Import your components
import LoginForm from "./components/loginForm/LoginForm"; // Import your components
import { auth } from "./config/firebase-config";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex align-items-center justify-content-center h-100 ">
        <div className="todo">
          <h1 className="heading">TO DO APP</h1>
          <Routes>
            <Route index element={<Navigate to="/login" />} />
            <Route path="/tasks" element={<ListGroup />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
