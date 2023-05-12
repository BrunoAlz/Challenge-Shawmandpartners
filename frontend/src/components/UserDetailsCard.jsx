import { Link } from "react-router-dom";
import DateComponent from "./utils/DateComponent";
import Card from "react-bootstrap/Card";

const UserDetailsCard = ({ user }) => {
  return (
    <>
      <Card className="">
        <Card.Body>
          <h4 className="text-center mb-3">User Details</h4>
          <span className="text-secondary text-center">ID: </span>
          <h1 className="border border-radius border-3 text-center">
            {user.id}
          </h1>
          <span className="text-secondary text-center">Login: </span>
          <p className="fs-3 text-center">{user.login}</p>
          <span className="text-secondary text-center">Profile URL: </span>
          <p className="fs-6 text-center">
            <Link target="_blank" to={user.html_url}>
              {user.html_url}
            </Link>
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

export default UserDetailsCard;
