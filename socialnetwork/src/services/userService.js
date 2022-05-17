import { handleImageDisplay, HEADERS } from "../shared/constants";
import { User } from "../entities/UserObj";
import { storageService } from "./storageService";
const { baseURL } = require("../shared/baseURL");

class UserService {
  async getAllUsers() {
    return await baseURL
      .get("users?limit=100&offset=0", {
        headers: HEADERS(),
      })
      .then((response) => {
        const usersList = response.data.data;
        const newUsersList = usersList.map((user) => {
          handleImageDisplay(user);
          return new User(user);
        });
        return newUsersList;
      })
      .catch((error) => console.log(error));
  }

  async getLoggedUser() {
    return await baseURL
      .get("users/me", {
        headers: HEADERS(),
      })
      .then((response) => {
        const buffer = response.data;
        handleImageDisplay(buffer);
        const user = new User(buffer);
        return user;
      });
  }

  async getSingleUser(id) {
    return await baseURL
      .get(`users/${id}`, {
        headers: HEADERS(),
      })
      .then((response) => {
        const buffer = response.data.data;
        handleImageDisplay(buffer);
        const user = new User(buffer);
        return user;
      })
      .catch((error) => console.log(error));
  }

  async updateUser(id, data) {
    return await baseURL
      .patch(`users/${id}`, data, {
        headers: HEADERS(),
      })
      .catch((error) => console.log(error));
  }

  async uploadProfileImage(id, data) {
    const token = storageService.get("token");
    return await baseURL.post(`users/${id}/image`, data, {
      headers: {
        "x-api-key": "1vaHd3v",
        Authorization: token,
      },
    });
  }

  async getSingleUserPosts(id) {
    return await baseURL
      .get(`users/${id}/posts`, {
        headers: HEADERS(),
      })
      .then((response) => response.data.total)
      .catch((error) => console.log(error));
  }

  async getSingleUserComments(id) {
    return await baseURL
      .get(`users/${id}/comments`, {
        headers: HEADERS(),
      })
      .then((response) => response.data.total)
      .catch((error) => console.log(error));
  }

  async deleteSingleUser(id, data) {
    return await baseURL
      .delete(
        `users/${id}`,
        {
          headers: HEADERS(),
        },
        data
      )
      .then(() => {
        storageService.remove("token");
      })
      .catch((error) => console.log(error));
  }
}

export const userService = new UserService();
