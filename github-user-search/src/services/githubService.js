import axios from "axios";

const BASE_URL = "https://api.github.com";

// 🔹 Fetch a single user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 🔹 Advanced search (username + location + minRepos)
export const fetchAdvancedUsers = async (
  query,
  location = "",
  minRepos = 0
) => {
  try {
    // Build search string dynamically
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }

    if (minRepos > 0) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchQuery}`
    );

    return response.data.items; // search API returns { items: [...] }
  } catch (error) {
    throw error;
  }
};
