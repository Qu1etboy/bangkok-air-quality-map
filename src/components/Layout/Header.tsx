import SearchInput from "../Form/SearchInput";
import OffCanvas from "./OffCanvas";

export default function Header() {
  return (
    <header className="fixed z-10 flex w-full items-center justify-between bg-white px-5 py-3 drop-shadow-md">
      <section className="flex items-center gap-5">
        <OffCanvas />
        <h1 className="text-2xl font-bold lg:text-3xl">Bangkok Air Quality</h1>
      </section>
      <section className="hidden w-96 md:block">
        <SearchInput />
      </section>
    </header>
  );
}
