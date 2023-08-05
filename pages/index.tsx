import Head from "next/head";
import { FadeIn } from "../components/FadeIn";
import { Header } from "../components/Header";
import { ConceptItem } from "@/components/ConceptItem";
import { AccessItem } from "../components/AccessItem";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mami Coffee</title>
      </Head>

      <div>
        <div className="bg-amber-900/60">
          <div className="bg-[url('/image/woman.jpg')] bg-no-repeat bg-right ">
            <Header />

            <div className="container mx-[10px] sm:mx-auto h-screen">
              <FadeIn>
                <h1 className="text-[70px] tracking-wide leading-normal text-white font-body mt-[85px] mb-[50px]">
                  つい
                  <br />
                  寄りたくなっちゃうんだよなぁ。
                </h1>
                <p className="text-4xl text-white opacity-80 tracking-wider font-body rounded-md inline p-2 ">
                  −−そんなカフェができました。
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        <main className="container mx-[20px] sm:mx-auto">
          <ConceptItem />

          <hr />

          <div className="container flex-wrap h-[900px] sm:h-[1000px] xl:h-screen">
            <FadeIn>
              <h2 className="font-serif font-black text-[70px] mb-[10px] sm:mb-[50px] mt-[100px] text-black/70 text-left xl:text-center">
                Menu
              </h2>
            </FadeIn>
            <div className="xl:flex">
              <div className="flex justify-center items-center shadow-2xl bg-gray-100/90 bg-auto h-[450px] w-[460px] xl:w-[700px] md:w-[780px] sm:w-[600px]">
                Image
              </div>
              <FadeIn>
                <p className="text-[20px] font-body tracking-wide leading-[70px] xl:leading-[80px] opacity-50 mt-[20px] xl:mt-[90px] ml-0 xl:ml-[70px]">
                  Blend coffee /Cafe llatte /Cafe mocha /Cocoa etc.
                  <br />
                  Sugar donut /Gateau chocolat /Cheese cake /Cannele etc.
                  <br />
                  <a
                    className="text-[30px] font-bold  border-2 border-black rounded bg-rose-800/80 px-4 py-2 hover:bg-rose-800/60 hover:px-2 hover:duration-500"
                    href="Menu"
                  >
                    Menu
                  </a>
                </p>
              </FadeIn>
            </div>
          </div>

          <hr />

          <AccessItem />
        </main>

        <Footer />
      </div>
    </div>
  );
}
