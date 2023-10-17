import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="plum"
          grayColor="auto"
          radius="small"
          panelBackground="translucent"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
