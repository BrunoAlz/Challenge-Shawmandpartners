import axios from "axios";
const endpoint = "http://localhost:3000/api/users";

// get users data
const getUsers = async () => {
  try {
    const response = await axios.get(endpoint);
    return response;
  } catch (error) {
    return error;
  }
};

// get user Profile details
const getUserProfileDetails = async (username) => {
  try {
    const response = await axios.get(`${endpoint}/${username}/details`);
    return response;
  } catch (error) {
    return error;
  }
};

// get user Profile Repos
const getUserProfileRepos = async (username) => {
  try {
    const response = await axios.get(`${endpoint}/${username}/repos`);
    return response;
  } catch (error) {
    return error;
  }
};

const userService = {
  getUsers,
  getUserProfileDetails,
  getUserProfileRepos,
};

export default userService;
