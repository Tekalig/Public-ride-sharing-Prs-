import { Text, useColorMode } from "@chakra-ui/react";
import "./topbar.css";
import { FaHome, FaInfoCircle, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ActContext from "../../../context/actContext";

function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  const ctx = useContext(ActContext);
  return (
    <div className="topbarContainer">
      <div className="top">
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to={"/"}>
                {" "}
                <FaHome size={20} /> <Text fontSize={10}> ዋና ገጽ </Text>
              </Link>
            </li>

            <li className="topListItem">
              <Link to={"/about"}>
                <FaInfoCircle size={20} />
                <Text fontSize={10}>ስለ እኛ</Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="topLeft">
          <button onClick={toggleColorMode}>
            {colorMode == "dark" ? <FaSun /> : <FaMoon />}
          </button>
          {ctx.isLogin && (
            <Link to={"/account"}>
              <img
                className="topImage"
                src="https://images.pexels.com/photos/415829/"
                alt=""
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
