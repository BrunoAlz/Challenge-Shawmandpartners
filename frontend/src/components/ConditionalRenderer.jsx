import { Link } from "react-router-dom";
import DateComponent from "./DateComponent";
import { Col } from "react-bootstrap";

const ConditionalRenderer = ({ loading, error, user }) => {
  if (loading) {
    return <h1>Loading...</h1>;
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
      <h5 className="text-secondary">Login: </h5>
      <h5>{user.login}</h5>
      <hr />
      <h5 className="text-secondary">User ID: </h5>
      <h5>{user.id}</h5>
      <hr />
      <h5 className="text-secondary">Profile URL: </h5>
      <h5>
        <Link to={user.url}>{user.url}</Link>
      </h5>
      <hr />
      <h5 className="text-secondary">Date of the login creation: </h5>
      <h5>
        <DateComponent date={user.created_at} />
      </h5>
      <hr />
      <Link to="/" className="btn btn-danger my-3">
        back
      </Link>
    </>
  );
};

export default ConditionalRenderer;
