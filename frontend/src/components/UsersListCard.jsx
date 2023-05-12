import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ data }) => {
  return (
    <>
      {data.map((user) => (
        <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
          <Link to={`/${user.login}`} className="text-decoration-none">
            <Card className="mt-4" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center fs-4">
                  {user.login}
                </Card.Title>
                <Card.Subtitle className="mb-2">ID: {user.id}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default UserCard;
