import { themes } from "@/constants/themes";
import { ThemeOptionsProps } from "@/types";
import { FaCheck } from "react-icons/fa";

export default function ThemeOptions(props: ThemeOptionsProps) {
  return (
    <>
      {themes.map((selectedTheme) => (
        <li
          key={selectedTheme.name}
          onClick={() => props.updateTheme(selectedTheme.value)}
        >
          <a className="text-start capitalize">
            {props.theme === selectedTheme.value && <FaCheck />}
            {selectedTheme.name}
          </a>
        </li>
      ))}
    </>
  );
}
