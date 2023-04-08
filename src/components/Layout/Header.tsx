import { useStationsContext } from "@/contexts/Stations";
import { TStationContext } from "@/types/aqi";
import { useState } from "react";
import SearchInput from "../Form/SearchInput";
import OffCanvas from "./OffCanvas";

export default function Header() {
  const { isLoading } = useStationsContext() as TStationContext;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed z-10 w-full">
      <header className="z-10 flex w-full items-center justify-between bg-white px-5 py-3 drop-shadow-md">
        <section className="flex items-center gap-5">
          <button
            onClick={() => setOpen(true)}
            className="rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="fill-black"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          </button>
          <h1 className="text-2xl font-bold lg:text-3xl">
            Bangkok Air Quality
          </h1>
        </section>
        <section className="hidden w-96 md:block">
          <SearchInput />
        </section>
      </header>
      <OffCanvas isOpen={isOpen} setOpen={setOpen} />
      {isLoading && (
        <div className="h-1 w-full overflow-hidden bg-gray-200">
          <div className="animate-progress h-full bg-gradient-to-r from-green-500 to-green-700"></div>
        </div>
      )}
    </div>
  );
}
