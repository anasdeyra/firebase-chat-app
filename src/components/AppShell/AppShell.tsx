import { useAside } from "../../context/aside";
import { useMediaQuery } from "../../context/screen";
import Aside from "./Aside";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { showAside } = useAside();
  const isBig = useMediaQuery(1024);

  return (
    <div
      className={`grid h-screen w-full ${
        showAside && isBig
          ? "grid-cols-[minmax(0,85px)_1fr_minmax(0,320px)]"
          : "grid-cols-[minmax(0,85px)_1fr]"
      }`}
    >
      <Navbar />
      <div className="h-full ">{children}</div>
      {showAside && isBig && <Aside />}
    </div>
  );
}
