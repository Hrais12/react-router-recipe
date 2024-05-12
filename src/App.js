import "./style.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Recipe from "./pages/Recipe";
import Main from "./pages/Main";
import List from "./pages/List";
import Nav from "./components/Nav";
export default function App() {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </div>
  );
}
