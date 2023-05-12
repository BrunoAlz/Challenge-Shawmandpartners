import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers } from "../slices/userSlice";

import { Row, Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import UserCard from "../components/UsersListCard";

const UsersList = () => {
  const [sinceInput, setSinceInput] = useState(null);

  const { data, since } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleFirstPage = () => {
    dispatch(getUsers(null));
    setSinceInput(null)
  };

  const handleNextPage = () => {
    if (since) {
      dispatch(getUsers(since));
      setSinceInput(since);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUsers(sinceInput));
  };

  return (
    <div>
      <Row>
        <UserCard data={data} />
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" className="ms-2" onClick={handleFirstPage}>
          First
        </Button>
        <Button variant="primary" className="ms-2" onClick={handleNextPage}>
          Next
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3 bg-light">
            <Form.Control
              className="text-center"
              type="number"
              placeholder="ID"
              onChange={(e) => setSinceInput(e.target.value)}
              value={sinceInput || ""}
            />
            <Button type="submit" variant="primary" id="button-addon2">
              Filter
            </Button>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};

export default UsersList;
