import Topbar from "../../HomePage/components/TopbarComponent/Topbar";
import PaymentMethods from "./Payment Methods Component/PaymentMethods";
import Profile from "./Profile Information Componet/Profile";
import Settings from "./Settings component/Setting";
import Footer from "../../HomePage/components/FooterComponent/Footer";
function Account() {
  return (
    <>
      <Topbar />
      <Profile />
      <PaymentMethods />
      <Settings />
      <Footer />
    </>
  );
}

export default Account;
