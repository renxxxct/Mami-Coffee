import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuItem } from "@/components/MenuItem";

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Mami’s Coffee Menu</title>
      </Head>

      <div>
        <header className="bg-amber-900/60">
          <Header />
        </header>

        <MenuItem />

        <Footer />
      </div>
    </div>
  );
}
