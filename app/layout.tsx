import MainLayout from "@/components/layouts/MainLayout";
import { metadataConfig } from "@/constants/metadata";

export const metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout children={children} />;
}
