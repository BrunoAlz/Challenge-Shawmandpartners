import Table from "react-bootstrap/Table";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingError from "./utils/LoadingError";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileRepos } from "../slices/reposSlice";

const ReposTable = () => {
  const [page, setPage] = useState(1);

  const {
    repos,
    loading: repoLoading,
    nextPage,
    lastPage,
  } = useSelector((state) => state.repos);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleFirstPage = () => {
    dispatch(getUserProfileRepos({ username: user.login, page: 1 }));
    setPage(1);
  };

  const handleNextPage = () => {
    dispatch(getUserProfileRepos({ username: user.login, page: nextPage }));
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    dispatch(getUserProfileRepos({ username: user.login, page: nextPage - 2 }));
    setPage(page - 1);
  };

  const handleLastPage = () => {
    dispatch(getUserProfileRepos({ username: user.login, page: lastPage }));
    setPage(lastPage);
  };

  useEffect(() => {
    dispatch(getUserProfileRepos({ username: user.login, page: null }));
  }, [dispatch]);

  return (
    <>
      {repoLoading ? (
        <LoadingError loading={repoLoading} />
      ) : (
        <>
          {repos.length > 0 ? (
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
                          <Link target="_blank" to={repo.html_url}>
                            {repo.html_url}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <div className="text-center">
                  <span className="">
                    {lastPage
                      ? `Page ${page} from ${lastPage}`
                      : `Last page ${page}`}
                  </span>
                  <Button
                    variant="primary"
                    className="ms-2"
                    onClick={handleFirstPage}
                  >
                    First
                  </Button>
                  {page > 1 && (
                    <Button
                      variant="primary"
                      className="ms-2"
                      onClick={handlePrevPage}
                    >
                      Prev
                    </Button>
                  )}
                  {lastPage && (
                    <Button
                      variant="primary"
                      className="ms-2"
                      onClick={handleNextPage}
                    >
                      Next
                    </Button>
                  )}
                  {lastPage && (
                    <Button
                      variant="primary"
                      className="ms-2"
                      onClick={handleLastPage}
                    >
                      Last
                    </Button>
                  )}
                </div>
              </Card.Footer>
            </Card>
          ) : (
            <h1 className="text-center text-danger">
              User does not have public repositories
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default ReposTable;
