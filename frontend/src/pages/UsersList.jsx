import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers } from "../slices/userSlice";

import { Row } from "react-bootstrap";

import UserCard from "../components/UserCard";

const UsersList = () => {
  const { data, error, success, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <Row>
        <UserCard data={data} />
      </Row>
    </div>
  );
};

export default UsersList;
