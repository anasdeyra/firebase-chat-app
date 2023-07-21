import MessageCard, { MessageCardprops } from "./MessageCard";

export default function RecentChats({
  messages,
  unreadCount,
}: RecentChatsProps) {
  return (
    <div className="-mx-6">
      <div className="mx-6 flex items-center justify-start">
        <span className=" text-xl font-bold">Messages</span>
        {unreadCount > 0 && (
          <span className="ml-2 rounded-xl bg-brand-blue px-2 py-1 text-xs font-medium text-white">
            {unreadCount}
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-col">
        {messages.map((props, i) => (
          <MessageCard {...props} key={i} />
        ))}
      </div>
    </div>
  );
}

interface RecentChatsProps {
  messages: MessageCardprops[];
  unreadCount: number;
}
