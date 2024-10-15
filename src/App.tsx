import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AIComponent from "./pages/AIComponent";
import "./index.css";
import "animate.css/animate.compat.css";
function App() {
  return (
    <>
      <AIComponent />
    </>
  );
}
export default App;
