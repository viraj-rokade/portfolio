import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-link">
        <a href="/">&copy; {new Date().getFullYear()} virajrokade.com | All rights reserved.</a>
      </div>
    </footer>
  );
};

export default Footer;
