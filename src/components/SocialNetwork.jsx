import "../styles/components/socialnetwork.sass";

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
    {
        name: "linkedin",
        icon: <FaLinkedinIn />,
        linkTo: "https://www.linkedin.com/in/guilherme-alves-971208118/",
    },
    {
        name: "github",
        icon: <FaGithub />,
        linkTo: "https://github.com/guilherme25alves",
    },
    {
        name: "instagram",
        icon: <FaInstagram />,
        linkTo: "https://www.instagram.com/alv3sguii/",
    },
];

const SocialNetwork = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a
                    href={network.linkTo}
                    className="social-btn"
                    id={network.name}
                    key={network.name}
                    target="_blank"
                >
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetwork;
