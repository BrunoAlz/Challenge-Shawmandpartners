import { Link } from "react-router-dom";
import DateComponent from "./DateComponent";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const ConditionalRenderer = ({ loading, error, user }) => {
  if (loading) {
    return (
      <Spinner className="" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return (
      <>
        <h1 className="text-danger">User does not exist</h1>
        <Link to="/" className="btn btn-danger my-3">
          back
        </Link>
      </>
    );
  }

  return (
    <>
      <Card className="">
        <Card.Body>
          <h1 className="border border-radius border-3 text-center">
            {user.id}
          </h1>
          <p className="fs-3 mt-3 text-center">{user.login}</p>
          <p className="fs-6 text-center">
            <Link to={user.html_url}>{user.html_url}</Link>
          </p>
          <hr />
          <p className="text-secondary text-center">
            Date of the login creation:{" "}
          </p>
          <p className="text-center">
            <DateComponent date={user.created_at} />
          </p>
          <hr />
          <Link to="/" className="btn btn-primary w-100 my-3">
            back
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ConditionalRenderer;
