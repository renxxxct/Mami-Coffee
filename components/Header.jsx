import Link from "next/link";

// map関数に渡すデータ
const CONTENTS = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "Concept",
    title: "Concept",
  },
  {
    href: "Menu",
    title: "Menu",
  },
  {
    href: "Access",
    title: "Access",
  },
];

export function Header() {
  return (
    <div className="h-44 m-full flex justify-around items-center">
      {/* カフェのロゴ */}
      <Link href="/" legacyBehavior>
        <a className="font-english text-[35px] font-black text-white sm:text-[45px] ml-4">
          Mami Coffee
        </a>
      </Link>
      {/* nav バー ここでmap関数でデータを受け取り、返す */}
      <nav className="text-[15px] md:text-2xl">
        {CONTENTS.map((content) => {
          return (
            <Link key={content.href} href={content.href} legacyBehavior>
              <a className="mx-4 sm:mx-8 font-serif text-white scale-x-0 scale-y-100 hover:border-b-2 hover:duration-300 hover:scale-100">
                {content.title}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
