import { useState } from "react";
import toast from "react-hot-toast";

const useSearchUser = () => {
  const [loading, setLoading] = useState(false);
  
  const [searchUserData, setSearchUserData] = useState();

  const searchUser = async (username) => {
    setLoading(true);
    try {
      if (!username) return;
      if (username.length < 3) {
        toast.error("Search character must be greater than 3");
      }
      
      const res = await fetch(`api/users/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ username }),
      });

      const data = await res.json();
      
      if (data.error) throw new Error(data.error);

      setSearchUserData(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, searchUser, searchUserData };
};

export default useSearchUser;
