import Avatar from "../img/20160928_143542.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetwork from "./SocialNetwork";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Guilherme A. Anjos" />
            <p className="title">Desenvolvedor Fullstack</p>
            <SocialNetwork />
            <InformationContainer />
            <a href="" className="btn">
                Download Currículo
            </a>
        </aside>
    );
};

export default Sidebar;
