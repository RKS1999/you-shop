import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const login = async (email, password) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (data.length > 0) {
        setUser(data[0]);
        localStorage.setItem('user', JSON.stringify(data[0]));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error", error);
      return false;
    }
  };

  const signup = async (userData) => {
    try {
      await axios.post(`http://localhost:5000/users`, userData);
      return true;
    } catch (error) {
      console.error("Signup error", error);
      return false;
    }
  };

  const updateUser = async (userData) => {
    try {
      await axios.put(`http://localhost:5000/users/${user.id}`, userData);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error("Update error", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
