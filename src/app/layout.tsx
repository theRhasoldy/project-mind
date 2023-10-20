import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import ThemeRegistry from "@/components/theme/ThemeRegistry";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeRegistry defaultMode="dark" options={{ key: "mui" }}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
