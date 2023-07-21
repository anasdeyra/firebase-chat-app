import {
  FiMessageCircle,
  FiUsers,
  FiArchive,
  FiPhone,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col items-center justify-between border-r border-r-neutral-200 px-6 py-8">
      <Link to={"/app"}>
        <img src="/logo.png" width={36} height={36} className="rounded-full" />
        <span className="sr-only">home</span>
      </Link>
      <nav className="flex flex-col gap-6">
        {NAV_MENU.map((props, i) => (
          <NavItem key={i} {...props} />
        ))}
      </nav>
      <div>
        <div className="cursor-pointer rounded-xl p-2 text-neutral-900 shadow-sm ring-1 ring-neutral-200 transition-all  active:scale-95 active:shadow-md">
          <FiSettings size={20} />
        </div>
        <div
          onClick={() => {
            signOut(auth).then(() => {
              navigate("/");
            });
          }}
          className="mt-4 cursor-pointer rounded-xl p-2 text-red-500 shadow-sm ring-1  ring-neutral-200  transition-all active:scale-95 active:shadow-md"
        >
          <FiLogOut size={20} />
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ Icon, label, link }: NavItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;

  return (
    <Link
      to={link}
      className={`rounded-xl p-2 shadow-sm transition-all active:scale-95 active:shadow-md ${
        isActive
          ? "bg-brand-blue text-white"
          : "text-neutral-900 ring-1 ring-neutral-200"
      }`}
    >
      <Icon size={20} /> <span className="sr-only">{label}</span>
    </Link>
  );
};

interface NavItemProps {
  label: string;
  link: string;
  Icon: IconType;
}

const NAV_MENU: NavItemProps[] = [
  {
    label: "Messages",
    link: "/app",
    Icon: FiMessageCircle,
  },
  {
    label: "Friends",
    link: "/app/friends",
    Icon: FiUsers,
  },
  {
    label: "Calls",
    link: "/app/calls",
    Icon: FiPhone,
  },
  {
    label: "Archived",
    link: "/app/archived",
    Icon: FiArchive,
  },
];
