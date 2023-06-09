import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileDetails } from "../slices/userSlice";
import UserDetailsCard from "../components/UserDetailsCard";
import { Col, Row } from "react-bootstrap";
import ReposTable from "../components/ReposTable";
import LoadingError from "../components/utils/LoadingError";

const UserDetails = () => {
  const { username } = useParams();

  const { user, error, loading, success } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileDetails(username));

  }, [dispatch, username, success]);

  return (
    <div>
      <Row>
        <LoadingError loading={loading} error={error} />
        {!loading && !error && (
          <>
            <Col xxl={4} xl={4} lg={5} md={5} sm={12} className="mt-4">
              <UserDetailsCard user={user} />
            </Col>
            <Col xxl={8} xl={8} lg={7} md={7} sm={12} className="mt-4">
              <ReposTable />
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default UserDetails;
