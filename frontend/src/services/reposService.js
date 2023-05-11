import axios from "axios";
const endpoint = "http://localhost:3000/api/users";

// get user Profile Repositóries
const getUserProfileRepos = async (username) => {
  try {
    const response = await axios.get(`${endpoint}/${username}/repos`);
    console.log(response.data);
    return response;
  } catch (error) {
    return error;
  }
};

const reposService = {
  getUserProfileRepos,
};

export default reposService;