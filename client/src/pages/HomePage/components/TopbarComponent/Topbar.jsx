import { Button, Center, Text, useColorMode } from "@chakra-ui/react";
import "./topbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaPinterest,
  FaHome,
  FaInfoCircle,
  FaCarSide,
  FaPaypal,
  FaIdCard,
  FaWheelchair,
} from "react-icons/fa";
import { Link } from "react-router-dom";


function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode("dark");

  return (
    
    <div className="topbarContainer" >
      <div className="top">
        <div className="topLeft">
          <i className="topIcon ">
            {" "}
            <FaFacebookF />
          </i>
          <i className="topIcon ">
            <FaTwitter />
          </i>
          <i className="topIcon ">
            <FaPinterest />
          </i>
          <i className="topIcon ">
            <FaInstagram />
          </i>
        </div>
        <Button onClick={toggleColorMode}>color mode</Button>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to={"/"}> <FaHome size={20}/> <Text fontSize={10}> ዋና ገጽ </Text></Link>
            </li>
            <li className="topListItem">
              <Link to={"/account"}><FaIdCard size={20}/> <Text fontSize={10}>የኔ ገጽ </Text></Link>
            </li>
            <li className="topListItem">
              <Link to={"/driver"}><Center><FaWheelchair size={20}/></Center><Text fontSize={10}>ሾፌር</Text></Link>
            </li>
            {/* <li className="topListItem">
              <Link to={"/payment"}><Center><FaPaypal size={20}/></Center><Text fontSize={10}>ክፍያ</Text></Link>
            </li> */}
            <li className="topListItem">
              <Link to={"/ride-request"}><Center> <FaCarSide size={20}/></Center><Text fontSize={10}>የራይድ አገልግሎት</Text></Link>
            </li>

            <li className="topListItem">
              <Link to={"/about"}><FaInfoCircle size={20}/><Text fontSize={10}>ስለ እኛ</Text></Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <div className="inputContainer">
            <i className="topSearchIcon ">
              <FaSearch />
            </i>
            <input type="text" className="searchInput" placeholder="ይፈልጉ..." />
          </div>
          <img
            className="topImage"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
