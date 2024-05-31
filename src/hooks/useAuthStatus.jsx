import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const { user, googleuser } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    if ((user, googleuser)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setCheckStatus(false);
  }, [user, googleuser]);

  return { isLoggedIn, checkStatus };
};

export default useAuthStatus;
