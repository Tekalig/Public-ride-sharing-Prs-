import React from "react";
const ActContext = React.createContext({
  isLogin: false,
  handleLogin: () => {},
  token_id: "",
  setTokenId: () => {},
});

export default ActContext;
