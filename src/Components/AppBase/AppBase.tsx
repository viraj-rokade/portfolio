
import "./AppBase.css";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
const AppBase = () => {
  return <div className="app-base-container">
    <Header />
    <Content />
    <Footer />
  </div>;
};

export default AppBase