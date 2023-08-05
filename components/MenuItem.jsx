import { FadeIn } from "../components/FadeIn";

// Drinc のデータ
const DRINC = [
  {
    public: "image",
    description: "Blend coffee",
    subdescription: "¥500+tax",
  },
  {
    public: "image",
    description: "Cafe llatte",
    subdescription: "¥600+tax",
  },
  {
    public: "image",
    description: "Cafe mocha",
    subdescription: "¥600+tax",
  },
  {
    public: "image",
    description: "Cocoa",
    subdescription: "¥550+tax",
  },
];
// Food のデータ
const FOOD = [
  {
    public: "image",
    description: "Suger donut",
    subdescription: "¥300+tax",
  },
  {
    public: "image",
    description: "Gateau chocolat",
    subdescription: "¥600+tax",
  },
  {
    public: "image",
    description: "Cheese cake",
    subdescription: "¥600+tax",
  },
  {
    public: "image",
    description: "Cannele",
    subdescription: "¥500+tax",
  },
];

export function MenuItem() {
  return (
    <main className="container mx-[20px] sm:mx-auto">
      <div className="container flex-wrap h-[3300px] sm:h-[2000px] xl:h-[1300px]">
        <FadeIn>
          <h2 className="font-serif font-black text-[70px] mb-[10px] sm:mb-[30px] mt-[50px] text-black/70 text-left xl:text-center">
            Menu
          </h2>
        </FadeIn>
        <div>
          <FadeIn>
            <h3 className="text-5xl font-serif text-black/70 ml-[40px] mb-[40px] underline underline-offset-4">
              Drinc
            </h3>
          </FadeIn>
          <FadeIn>
            <div className="xl:flex justify-around flex-wrap">
              {DRINC.map((item) => {
                return (
                  <div key={item.public}>
                    <div className="flex justify-center items-center shadow-2xl bg-gray-100/90 h-[250px] w-[250px] xl:w-[px] md:w-[px] sm:w-[px]">
                      {item.public}
                    </div>
                    <p className="text-2xl text-black/70 text-center mt-5 font-body">
                      {item.description}
                    </p>
                    <p className="text-2xl text-black/70 text-center font-body">
                      {item.subdescription}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        <hr className="mt-[70px]" />

        <div>
          <FadeIn>
            <h3 className="text-5xl font-serif text-black/70 ml-[40px] mt-[70px] mb-[40px] underline underline-offset-4">
              Food
            </h3>
          </FadeIn>
          <FadeIn>
            <div className="xl:flex justify-around flex-wrap">
              {FOOD.map((item) => {
                return (
                  <div key={item.description}>
                    <div className="flex justify-center items-center shadow-2xl bg-gray-100/90 h-[250px] w-[250px] xl:w-[px] md:w-[px] sm:w-[px]">
                      {item.public}
                    </div>
                    <p className="text-2xl text-black/70 text-center mt-5 font-body">
                      {item.description}
                    </p>
                    <p className="text-2xl text-black/70 text-center font-body">
                      {item.subdescription}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
