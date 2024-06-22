import { Button, Text, useColorMode } from "@chakra-ui/react";
import "./topbar.css";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Topbar() {
  const { toggleColorMode } = useColorMode("dark");
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
        <div className="topRight">
          <Button onClick={toggleColorMode} color={"black"}>
            color mode
          </Button>
          <Link to={"/account"}>
            <img
              className="topImage"
              src="https://images.pexels.com/photos/415829/"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
