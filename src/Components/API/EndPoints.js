const baseUrl = "https://dummyjson.com";
const endPoint = {
  getAllProducts: `/products`,
  getProductById: (id) => `/products/${id}`,
  getAllCategory: `/products/categories`,
  getProductByCategories: (term) => `/products/category/${term}`,
  // userLogin: `/auth/login`, // Corrected endpoint
  // userRegister: `/users/add`,
  // getUserById: (id) => `/users/${id}`,
};

export { baseUrl, endPoint };
