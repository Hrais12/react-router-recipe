import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/list">
        <div>Go To Recipes</div>
      </Link>
    </div>
  );
}
