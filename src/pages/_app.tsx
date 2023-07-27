import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import NavBar from "~/components/NavBar";
import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import Footer from "~/components/Footer";

const poppins = Poppins({
  style: ["normal", "italic"],
  weight: ["100", "400", "500", "800", "900", "200", "300", "700"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});

const MyApp: AppType<{ session: Session | null }> = ({
      Component,
      pageProps: { session, ...pageProps },
    }) => {
  return (
    <SessionProvider session={session}>
      <main className={`${poppins.className} bg-base-100`}>
        <NavBar />
        <main className="w-[95vw] ml-[2.5vw]">
          <Component {...pageProps} />
        </main>
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
