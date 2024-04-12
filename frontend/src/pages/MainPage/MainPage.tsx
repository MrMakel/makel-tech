import TopMenu from "@/components/TopMenu/TopMenu.tsx";
import CenterHeader from "@/components/CenterHeader/CenterHeader.tsx";
import makelLogo from "@/assets/makel.webp";
import "./styles.css";

const MainPage = () => {
  return (
    <div className="background">
      <TopMenu/>
      <div className="motd">
        <CenterHeader text={"Makel..."}/>
      </div>
      <img src={makelLogo} alt="Logo" className="intro-logo"/>
    </div>
  );
};

export default MainPage;
