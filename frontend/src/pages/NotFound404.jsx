import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="text-center">
      <h1 className="text-danger mt-5 pt-5">Error 404 - Page not found</h1>
      <Link to="/users" className="btn btn-primary my-3">
        back to Homepage
      </Link>
    </div>
  );
};

export default NotFound404;
