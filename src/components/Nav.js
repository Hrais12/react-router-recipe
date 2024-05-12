import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navLogo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgafPDEmAPYNU64xOeQCWZ-NbzQ15cyUxMsjH5tnYIiA&s"
        className="logo"
      ></img>
      <div className="nav">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/list">
          <div>Go To Recipes</div>
        </Link>
      </div>
    </div>
  );
}
