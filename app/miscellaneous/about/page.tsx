import Header from "@/components/ui/Header";
import { aboutSections } from "@/constants/miscellaneousInfo";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="p-4">
        <Header />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-bold text-4xl text-center">About YourApp</h1>

          {aboutSections.map((section, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-xl mb-8 p-6 rounded-box"
            >
              <h2 className="mb-4 font-semibold text-2xl">{section.title}</h2>

              {section.content?.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {paragraph}
                </p>
              ))}

              {section.listItems?.map((item, itemIndex) => (
                <ul key={itemIndex} className="list-disc list-inside">
                  <li>{item}</li>
                </ul>
              ))}

              {section.contactItems?.map((item, contactIndex) => (
                <ul key={contactIndex} className="mb-4 list-disc list-inside">
                  <li>
                    {item.text}{" "}
                    <a href={item.link} className="link link-primary">
                      {item.label}
                    </a>
                  </li>
                </ul>
              ))}

              {section.footer && (
                <p>
                  {section.footer.text}{" "}
                  <Link
                    href={section.footer.link || ""}
                    className="link link-primary"
                  >
                    {section.footer.linkText}
                  </Link>{" "}
                  {section.footer.suffix}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
