import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import UserCircle from "./UserCircle";

export default function OnlineFriends({ users }: OnlineFriendsProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className=" text-xl font-bold">Online Now</span>
        <Link
          to={"/app/friends"}
          className="flex items-end gap-x-[2px] text-neutral-500 hover:text-neutral-900"
        >
          <span className="text-xs font-medium  ">More</span>
          <FiChevronRight className="" size={14} />
        </Link>
      </div>
      {users.length > 0 ? (
        <div className=" mt-4 flex gap-2 overflow-x-hidden">
          {users.map((props, i) => (
            <UserCircle isOnline key={i} {...props} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-neutral-500">
          None of your friends are online now!
        </p>
      )}
    </div>
  );
}

interface OnlineFriendsProps {
  users: {
    name: string;
    image: string;
  }[];
}
