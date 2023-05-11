import axios from "axios";
const endpoint = "http://localhost:3000/api/users";

// get users data
const getUsers = async () => {
  try {
    const response = await axios.get(endpoint);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// get user Profile details
const getUserProfileDetails = async (username) => {
  try {
    const response = await axios.get(`${endpoint}/${username}/details`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  getUsers,
  getUserProfileDetails,
};

export default userService;
