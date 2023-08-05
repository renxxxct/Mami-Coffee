import { FadeIn } from "./FadeIn";

export function AccessItem() {
  return (
    <div className="container flex-wrap h-[900px] sm:h-[1000px] xl:h-screen">
      <FadeIn>
        <h2 className="font-serif font-black text-[70px] mb-[10px] sm:mb-[50px] mt-[100px] text-black/70 text-left xl:text-center">
          Access
        </h2>
      </FadeIn>
      <div className="xl:flex">
        <div className="flex justify-center items-center shadow-2xl bg-gray-100/90 bg-auto h-[450px] w-[460px] xl:w-[700px] md:w-[780px] sm:w-[600px]">
          Image
        </div>
        <FadeIn>
          <p className="text-[20px] font-body tracking-wide leading-[80px] opacity-50 mt-[50px] xl:mt-[90px] ml-0 xl:ml-[70px]">
            Mami’s Coffee
            <br />
            〒222-2222 渋谷区道玄坂2- 2-22
            <br />
            営業時間 AM 8:00 ~ PM 20:00 （LO:19:30）
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
