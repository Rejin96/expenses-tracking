import { useState } from "react";
import axios from "axios";

const useSignUp = () => {
  const [error, setError] = useState(null);

  const signup = async (fullname, email, password) => {
    try {
      const response = await axios.post("/api/user/signup", { fullname, email, password });
      // Assuming your backend returns a success message or user object
      return response.data;
    } catch (err) {
      if (err.response && err.response.status === 409) {
        // User already exists
        setError("User already exists.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      throw err;
    }
  };

  return { signup, error };
};

export default useSignUp;
