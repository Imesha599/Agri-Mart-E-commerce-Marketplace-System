import { Spin } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/FirebaseConfig";
import { User } from "firebase/auth";

const UserContext = createContext(null);

/**
 *
 * @returns {User}
 */
export const useUserContext = () => useContext(UserContext);

export const withCurrentUserContext = (Component) => (props) => {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setcurrentUser(user);
      } else {
        navigate("/login");
        setcurrentUser(null);
      }
    });
  }, [navigate]);

  if (loading) {
    return <Spin />;
  } else if (currentUser) {
    return (
      <UserContext.Provider value={currentUser}>
        <Component {...props} />
      </UserContext.Provider>
    );
  } else {
    return <></>;
  }
};
