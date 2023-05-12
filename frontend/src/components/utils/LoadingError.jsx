import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoadingError = ({ loading, error }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <h1 className="text-danger">User does not exist</h1>
        <Link to="/" className="btn btn-primary my-3">
          Back to Homepage
        </Link>
      </div>
    );
  }

  return null;
};

export default LoadingError;
