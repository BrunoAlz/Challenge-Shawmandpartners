import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileDetails } from "../slices/userSlice";
import DateComponent from "../components/DateComponent";
import ConditionalRenderer from "../components/ConditionalRenderer";

const UserDetails = () => {
  const { username } = useParams();

  const { user, error, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileDetails(username));
  }, []);

  return (
    <div>
      <ConditionalRenderer loading={loading} error={error} user={user} />
    </div>
  );
};

export default UserDetails;
