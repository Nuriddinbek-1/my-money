import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ display: "flex" }}>
      <Link to={"/"} style={{ margin: "auto" }}>
        <img src="../../public/assets/error.gif" alt="404 bad request img" />
      </Link>
    </div>
  );
}

export default NotFound;
