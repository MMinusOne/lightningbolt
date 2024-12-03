import Header from "@/components/ui/Header";
import { metadataConfig } from "@/constants/metadata";
import { termsSections } from "@/constants/miscellaneousInfo";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <div className="p-4">
        <Header />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-bold text-4xl text-center">
            Terms of Service
          </h1>

          {termsSections.map((section, index) => (
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

              {section.listItems && (
                <ul className="mb-4 list-disc list-inside">
                  {section.listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {section.footer && <p>{section.footer.text}</p>}
            </div>
          ))}

          <div className="mt-8 text-center">
            <p className="mb-4">
              By using {metadataConfig?.title?.toString()}, you agree to abide
              by these terms of service.
            </p>
            <p>
              For any questions or concerns, please{" "}
              <Link href="/about" className="link link-primary">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
