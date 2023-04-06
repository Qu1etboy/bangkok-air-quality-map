import { AQIIndex } from "@/types/aqi";
import OffCanvas from "./OffCanvas";

export default function Header() {
  return (
    <header className="fixed z-10 flex w-full items-center justify-between bg-white px-5 py-3 drop-shadow-md">
      <section className="flex items-center gap-5">
        <OffCanvas />
        <h1 className="text-3xl font-bold">Bangkok Air Quality Map</h1>
      </section>
      <form className="flex w-96">
        <label className="sr-only">ค้นหาตามเขต</label>
        <div className="relative h-full w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="ค้นหาตามเขต..."
            required
          />
        </div>
        <button className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          ค้นหา
        </button>
      </form>
    </header>
  );
}
