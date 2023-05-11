import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileDetails } from "../slices/userSlice";
import { getUserProfileRepos } from "../slices/reposSlice";
import ConditionalRenderer from "../components/ConditionalRenderer";
import { Col, Row } from "react-bootstrap";
import ReposTable from "../components/ReposTable";

const UserDetails = () => {
  const { username } = useParams();

  const { user, error, loading } = useSelector((state) => state.user);
  const { repos } = useSelector((state) => state.repos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileDetails(username));
    dispatch(getUserProfileRepos(username));
  }, [dispatch, username]);

  return (
    <div className="mt-5">
      <Row>
        <Col xxl={4} xl={4} lg={5} md={5} sm={12}>
          <ConditionalRenderer loading={loading} error={error} user={user} />
        </Col>
        <Col xxl={8} xl={8} lg={7} md={7} sm={12}>
          <ReposTable repos={repos} />
        </Col>
      </Row>
    </div>
  );
};

export default UserDetails;
