import { useStationsContext } from "@/contexts/Stations";
import Filter from "../Form/Filter";
import SearchInput from "../Form/SearchInput";
import StationsList from "./StationsList";
import { motion, AnimatePresence } from "framer-motion";

export default function OffCanvas({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}) {
  const { stations } = useStationsContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ duration: 0.3, type: "easeInOut" }}
          className="fixed left-0 top-0 z-20 flex h-screen w-96 flex-col bg-white"
        >
          <div className="flex w-full items-center justify-between px-3 py-2 shadow-sm">
            <h2 className="text-xl font-bold">Bangkok Air Quality</h2>
            <button className="m-3" onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto pt-3">
            <h2 className="mx-3 text-3xl font-bold text-green-800">
              รายงานสถานการณ์
            </h2>
            <h2 className="mx-3 mb-5 text-3xl text-green-700">คุณภาพอากาศ</h2>
            <section className="mx-3 border-b pb-2">
              <SearchInput />
              <Filter />
              <p className="mt-5">ทั้งหมด {stations.length} สถานี</p>
            </section>
            <StationsList />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
