import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AccessItem } from "@/components/AccessItem";

export default function Access() {
  return (
    <div>
      <Head>
        <title>Mami’s Coffee Access</title>
      </Head>

      <div>
        <header className="bg-amber-900/60">
          <Header />
        </header>

        <main className="container mx-[20px] sm:mx-auto">
          <AccessItem />
        </main>

        <Footer />
      </div>
    </div>
  );
}
