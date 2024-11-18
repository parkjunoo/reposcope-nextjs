import "./_styles/globals.css";
import QueryProviders from "./query-provider";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import MainHeader from "./_components/MainHeader";

export const metadata = {
  title: "RepoScope",
  description: "A GitHub repository search engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="blue"
          grayColor="mauve"
          radius="large"
          scaling="90%"
        >
          <QueryProviders>
            <MainHeader />
            {children}
          </QueryProviders>
        </Theme>
      </body>
    </html>
  );
}
