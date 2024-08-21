import { useState } from "react";
import ActContext from "./actContext";

// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
  const [isLogin, setLogin] = useState(false);
  const [token_id, setToken] = useState("");
  const handleLogin = () => {
    setLogin(!isLogin);
  };
  const setTokenId = (id) => {
    const userId = token_id ? "" : id;
    setToken(userId);
  };
  return (
    <ActContext.Provider
      value={{
        isLogin: isLogin,
        handleLogin: handleLogin,
        token_id: token_id,
        setTokenId: setTokenId,
      }}
    >
      {children}
    </ActContext.Provider>
  );
}

export default ContextProvider;
