import "./globals.css";
import { Open_Sans } from "next/font/google";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "LK's Blog",
    template: "LK's | %s",
  },
  description: "Front Engineer LK's Blog",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setThemeMode = `
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
`;
  return (
    <html lang="en" className={`${sans.className} dark`}>
      <body className="w-full flex flex-col max-w-screen-2xl mx-auto dark:bg-gray-700 dark:text-white">
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
