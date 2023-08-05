import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ConceptItem } from "@/components/ConceptItem";

export default function Concept() {
  return (
    <div>
      <Head>
        <title>Mami’s Coffee Concept</title>
      </Head>

      <div>
        <header className="bg-amber-900/60">
          <Header />
        </header>

        <main className="container mx-[20px] sm:mx-auto">
          <ConceptItem />
        </main>

        <Footer />
      </div>
    </div>
  );
}
