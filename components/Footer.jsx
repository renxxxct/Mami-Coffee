import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-[300px] w-full bg-amber-900/60">
      <div className="flex justify-around mt-[50px]">
        <a className="font-english text-[30px] font-black text-white mt-[90px]  sm:text-[40px] ml-4">
          Mami Coffee
        </a>
        <div className="grid grid-cols-2 gap-4 font-self mt-[80px] text-white/80">
          <Link href="/" legacyBehavior>
            <a className="hover:opacity-70 duration-300">Home</a>
          </Link>
          <Link href="Concept" legacyBehavior>
            <a className="hover:opacity-70 duration-300">Concept</a>
          </Link>
          <Link href="Menu" legacyBehavior>
            <a className="hover:opacity-70 duration-300">Menu</a>
          </Link>
          <Link href="Access" legacyBehavior>
            <a className="hover:opacity-70 duration-300">Access</a>
          </Link>
        </div>
      </div>
      <small className="text-white flex justify-center mt-[120px]">
        @Mami Coffee Official
      </small>
    </footer>
  );
}
