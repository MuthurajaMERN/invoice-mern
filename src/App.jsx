import "./App.css";
// import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen w-full">
        <Outlet />
        
      </div>
    </>
  );
}

export default App;
