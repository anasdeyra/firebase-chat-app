import FriendsSearchBar from "../../components/FriendsSearchBar";
import { MessageCardprops } from "../../components/MessageCard";
import OnlineFriends from "../../components/OnlineFriends";
import RecentChats from "../../components/RecentChats";

export default function index() {
  return (
    <div className="grid h-full grid-cols-[minmax(0,300px)_1fr]">
      <section className="flex flex-col gap-6 border-r border-r-neutral-200 bg-white px-6 py-8">
        <FriendsSearchBar />

        <OnlineFriends users={[]} />
        <RecentChats messages={MESSAGES} unreadCount={13} />
      </section>
      <main className="bg-neutral-50 px-6 py-8"></main>
    </div>
  );
}

const TODAY = new Date(Date.now());

const MESSAGES: MessageCardprops[] = [
  {
    isTyping: true,
    sendingDate: TODAY,
    status: "seen",
    text: "Hey man wassup! jarida jardia jaijze ezjz aeja eajzejaze j",
    user: {
      image: "https://avatars.dicebear.com/api/avataaars/male/Anass.svg",
      isOnline: true,
      name: "Anass",
    },
  },
  {
    isTyping: false,
    sendingDate: TODAY,
    status: "sent",
    text: "Hey man wassup! jarida jardia jaijze ezjz aeja eajzejaze j",
    user: {
      image: "https://avatars.dicebear.com/api/avataaars/male/Anass.svg",
      isOnline: true,
      name: "Anass",
    },
  },
  {
    isTyping: false,
    sendingDate: TODAY,
    status: "unread",
    text: "Hey man wassup! jarida jardia jaijze ezjz aeja eajzejaze j",
    user: {
      image: "https://avatars.dicebear.com/api/avataaars/male/Anass.svg",
      isOnline: true,
      name: "Anass",
    },
    unreadCount: 10,
  },
];
