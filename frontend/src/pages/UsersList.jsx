import Card from "react-bootstrap/Card";

const UsersList = ({ users }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>UserName</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ID: </Card.Subtitle>       
        <Card.Link href="#">Details</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default UsersList;
