import Table from "react-bootstrap/Table";
import { Col } from "react-bootstrap";

const ReposTable = ({ repos }) => {
  return (
    <>
      <Table responsive striped bordered hover size="sm">
        <thead className="m-0">
          <tr className="m-0">
            <th>ID</th>
            <th>Name</th>
            <th>Repo URL</th>
          </tr>
        </thead>
        <tbody className="m-0">
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>{repo.html_url}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ReposTable;
