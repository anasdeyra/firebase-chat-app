import { LuSearch } from "react-icons/lu";

export default function FriendsSearchBar() {
  return (
    <div className="relative rounded-xl ">
      <LuSearch size={20} className="absolute left-4 top-3 text-neutral-300" />
      <input
        className="w-full text-ellipsis rounded-xl border-0 bg-neutral-50 bg-transparent px-4 py-3 pl-11 text-sm text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-300 focus:ring-inset focus:ring-neutral-300"
        type="text"
        placeholder="Search for your friend or chat groups"
      />
    </div>
  );
}
