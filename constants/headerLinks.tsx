import { FaHeart } from "react-icons/fa";

export const links = [
  { href: "/terms", label: "Terms" },
  { href: "/about", label: "About" },
  {
    href: "/donate",
    label: "Donate",
    icon: <FaHeart className="fill-primary" />,
    className: "bg-opacity-40 btn btn-primary",
  },
];
