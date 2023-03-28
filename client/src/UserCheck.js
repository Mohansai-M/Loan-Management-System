import { useState, useEffect } from "react";
import axios from "axios";

function UserCheck (token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setemail] = useState("");

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/api/info", {
            headers: { Authorization: token },
          });
          setIsLogged(true);
          setemail(res.data.Email);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };

      getUser();
    }
  });

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    email: email,
  };
}

export default UserCheck;
