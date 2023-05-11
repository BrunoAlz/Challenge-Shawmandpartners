import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileDetails } from "../slices/userSlice";
import DateComponent from "../components/DateComponent";

const UserDetails = () => {
  const { username } = useParams();

  const { user, error, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileDetails(username));
  }, []);

  return (
    <div>
      <h1 className="fs-1 text-center mt-5 text-primary">
        {loading && "CARREGANDO..."}
      </h1>
      <h1 className="fs-1 text-center mt-5 text-danger">{error && error} </h1>
      <h1 className="fs-1">Login: {user.login}</h1>
      <h1>User ID: {user.id}</h1>
      <h1>Profile URL: {user.url}</h1>
      <h1>Date of the login creation: 
        <DateComponent date={user.created_at} />
      </h1>
    </div>
  );
};

export default UserDetails;
