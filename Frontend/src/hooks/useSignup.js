import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullname,
    username,
    password,
    cpassword,
    gender,
  }) => {
    const verify = validateInput(
      fullname,
      username,
      password,
      cpassword,
      gender
    );

    if (!verify) return;
    setLoading(true);
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          cpassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // localstorage here
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      

      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function validateInput(fullname, username, password, cpassword, gender) {
  console.log(fullname);
  if (!fullname || !username || !password || !cpassword || !gender) {
    toast.error("Please fill all fields");
    return false;
  }
  if (password !== cpassword) {
    toast.error("Password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
