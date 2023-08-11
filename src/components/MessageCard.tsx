import UserCircle, { UserCircleProps } from "./UserCircle";
import { useEffect, useMemo, useState } from "react";
import { LuCheckCheck } from "react-icons/lu";
import { useStore } from "../store";
import { formatDate } from "../utils/formatDate";

export default function MessageCard({
  text,
  user,
  isTyping,
  sendingDate,
  status,
  unreadCount,
  chatRoomId,
}: MessageCardprops) {
  const dateText = formatDate(sendingDate);

  const formattedText = text.length > 23 ? text.slice(0, 20) + "..." : text;

  const _status = useMemo(() => {
    switch (status) {
      case "unread":
        return (
          <span className="rounded-xl bg-brand-blue px-[8px] py-[4px] text-xs text-white">
            {unreadCount && unreadCount > 9 ? "9+" : unreadCount}
          </span>
        );
      case "seen":
        return (
          <p className="text-xs font-medium text-brand-blue">
            <LuCheckCheck />
          </p>
        );
      case "sent":
        return (
          <p className="text-xs font-medium text-neutral-500">
            <LuCheckCheck />
          </p>
        );
    }
  }, [status]);

  const { joinChatRoom } = useStore();
  return (
    <div
      onClick={() => joinChatRoom(chatRoomId)}
      className={`flex cursor-pointer items-center  px-6 py-4 transition-colors ${
        status === "unread"
          ? "bg-neutral-50 hover:bg-neutral-100"
          : "bg-white hover:bg-neutral-50"
      }`}
    >
      <UserCircle {...user} />

      <div className="ml-2 flex grow items-center justify-between">
        <div>
          <p className="font-semibold">{user.name}</p>
          {isTyping ? (
            <p className="text-xs font-medium text-brand-blue">
              <TypingLoader />
            </p>
          ) : (
            <p
              className={`max-h-[1.25rem] overflow-hidden text-sm font-medium ${
                status === "unread" ? "bg text-black" : "text-neutral-700"
              }`}
            >
              {formattedText}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-xs text-neutral-500">{dateText}</span>
          {_status}
        </div>
      </div>
    </div>
  );
}

const TypingLoader = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? "." : prevDots + "."));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return `Typing ${dots}`;
};

export type MessageCardprops = {
  isTyping: boolean;
  sendingDate: Date;
  user: UserCircleProps;
  status: "sent" | "seen" | "unread";
  text: string;
  unreadCount?: number;
  chatRoomId: string;
};
