import axios from "axios";
const endpoint = "http://localhost:3000/api/users";

// get user Profile details
const getUsers = async () => {
  try {
    const response = await axios.get(endpoint);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const userService = {
  getUsers,
};

export default userService;
