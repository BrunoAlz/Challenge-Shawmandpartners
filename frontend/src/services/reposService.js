import axios from "axios";
const endpoint = "http://localhost:3000/api/users";

// get user Profile Repositóries
const getUserProfileRepos = async (username, page) => {
  try {
    const response = await axios.get(
      `${endpoint}/${username}/repos?page=${page}`
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

const reposService = {
  getUserProfileRepos,
};

export default reposService;
