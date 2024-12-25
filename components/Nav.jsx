'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "projects",
    path: "#projects",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  // Function to handle smooth scroll for anchor links
  const handleScroll = (event) => {
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="flex gap-8 font-bold">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            onClick={handleScroll}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } font-bold hover:text-accent transition-all capitalize`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
