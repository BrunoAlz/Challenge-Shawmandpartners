import Table from "react-bootstrap/Table";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReposTable = ({ repos }) => {
  return (
    <>
      <Card className="m-0 p-0">
        <Card.Body className="m-0 p-0">
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr className="text-center fs-5">
                <th>ID</th>
                <th>Name</th>
                <th>Repo URL</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((repo) => (
                <tr key={repo.id}>
                  <td className="text-center p-1 fw-bold">{repo.id}</td>
                  <td>{repo.name}</td>
                  <td>
                    <Link to={repo.html_url}>{repo.html_url}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReposTable;
