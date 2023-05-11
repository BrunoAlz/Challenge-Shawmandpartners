import { Link } from "react-router-dom";
import DateComponent from "./DateComponent";

function ConditionalRenderer({ loading, error, user }) {
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
      <h1 className="text-secondary">Login: </h1>
      <h1>{user.login}</h1>
      <hr />
      <h1 className="text-secondary">User ID: </h1>
      <h1>{user.id}</h1>
      <hr />
      <h1 className="text-secondary">Profile URL: </h1>
      <h1>
        <Link to={user.url}>{user.url}</Link>
      </h1>
      <hr />
      <h1 className="text-secondary">Date of the login creation: </h1>
      <h1>
        <DateComponent date={user.created_at} />
      </h1>
      <hr />
      <Link to="/" className="btn btn-danger my-3">
        back
      </Link>
      <Link to="/" className="btn btn-success mx-4 fs-4">
        REPOSITORIES
      </Link>
    </>
  );
}

export default ConditionalRenderer;
