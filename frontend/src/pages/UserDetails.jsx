import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileDetails } from "../slices/userSlice";

const UserDetails = () => {
  const { username } = useParams();

  const { user, error, success, loading } = useSelector((state) => state.user);

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileDetails(username));
  }, []);

  return <div>
    <h1>{user.login}</h1>
    <h1>{user.bio}</h1>
  </div>;
};

export default UserDetails;
