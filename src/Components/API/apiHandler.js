import { axiosInstance } from "./axiosInstance";
import { endPoint } from "./EndPoints";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get(endPoint.getAllProducts);
    return response.data.products || [];
  } catch (error) {
    console.log("Error fetching products:", error.response || error.message);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(endPoint.getProductById(id));
    return response.data;
  } catch (error) {
    console.log("Error fetching product by ID:", error.response || error.message);
    return null;
  }
};

export const getAllCategory = async () => {
  try {
    const response = await axiosInstance.get(endPoint.getAllCategory);
    return response.data;
  } catch (error) {
    console.log("Error fetching categories:", error.response || error.message);
    return null;
  }
};

export const getProductByCategories = async (term) => {
  try {
    const response = await axiosInstance.get(endPoint.getProductByCategories(term));
    return response.data;
  } catch (error) {
    console.log("Error fetching products by category:", error.response || error.message);
    return null;
  }
};

// export const userLogin = async (username, password) => {
//   console.log("Login request payload:", { username, password, expiresInMins: 30 });
//   try {
//     const response = await axiosInstance.post(endPoint.userLogin, {
//       username,
//       password,
//       expiresInMins: 30, // Added as per documentation
//     });
//     console.log("Login response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in:", error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// export const userRegister = async (username, email, password) => {
//   console.log("Register request payload:", { username, email, password });
//   try {
//     const response = await axiosInstance.post(endPoint.userRegister, {
//       username,
//       email,
//       password,
//     });
//     console.log("Register response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error registering user:", error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// export const getUserById = async (id) => {
//   try {
//     const response = await axiosInstance.get(endPoint.getUserById(id));
//     console.log("Get user response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.log("Error fetching user details:", error.response || error.message);
//     return null;
//   }
// };

// export const updateUser = async (id, userData) => {
//   try {
//     const response = await axiosInstance.put(endPoint.getUserById(id), userData);
//     console.log("Update user response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.log("Error updating user:", error.response || error.message);
//     throw error;
//   }
// };
