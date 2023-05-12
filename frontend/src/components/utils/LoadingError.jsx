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
      <>
        <h1 className="text-danger text-center">User does not exist</h1>
        <Link to="/" className="btn btn-danger my-3">
          Back to Homepage
        </Link>
      </>
    );
  }

  return null;
};

export default LoadingError;
