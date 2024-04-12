import "./styles.css";
import makelLogo from "@/assets/makel.webp";

const TopMenu = () => {
  return (
    <nav className="TopMenu">
      <img src={makelLogo} className="TopMenu-logo" alt="logo" />

      <a className="TopMenu-link" href="/">
        Main page
      </a>
    </nav>
  );
};

export default TopMenu;
