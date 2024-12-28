import { FaLinkedin, FaGithub, FaDiscord, FaRegThumbsUp, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sanaa-ennaji-44049922b/" },
  { icon: <FaGithub />, path: "https://github.com/sanaa-ennaji" },
  { icon: <FaTwitter />, path: "https://x.com/EnngSanae12068" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
