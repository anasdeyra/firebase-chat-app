import { useAside } from "../../context/aside";
import { useMediaQuery } from "../../context/screen";
import Aside from "./Aside";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { showAside } = useAside();
  const isBig = useMediaQuery(1024);

  showAside;
  return (
    <div
      className={`grid h-screen w-full ${
        showAside && isBig
          ? "grid-cols-[minmax(0,85px)_1fr_minmax(0,320px)]"
          : "grid-cols-[minmax(0,85px)_1fr]"
      }`}
    >
      <Navbar />
      <div className="h-full bg-neutral-50 px-6 py-8">{children}</div>
      {showAside && isBig && <Aside />}
    </div>
  );
}
