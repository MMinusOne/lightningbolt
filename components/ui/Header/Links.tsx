import { links } from "@/constants/headerLinks";
import { LinksProps } from "@/types";

export default function Links(props: LinksProps) {
  return (
    <>
      {links.map(({ href, label, icon, className = "btn btn-ghost" }) => (
        <a
          key={href}
          className={`${props.isMobile ? "" : "md:flex hidden"} ${className}`}
          href={href}
        >
          {label} {icon}
        </a>
      ))}
    </>
  );
}
