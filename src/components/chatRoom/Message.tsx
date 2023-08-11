import { useMemo } from "react";
import { formatDate } from "../../utils/formatDate";
import { LuCheckCheck } from "react-icons/lu";

export default function Message({
  isMine,
  sendingDate,
  text,
  user,
  seen,
  sent,
}: MessageProps) {
  const dateText = formatDate(sendingDate);

  const status = useMemo(() => {
    if (!isMine) return <span></span>;
    if (seen)
      return (
        <span className="text-sm font-medium text-brand-blue">
          <LuCheckCheck />
        </span>
      );
    if (sent)
      return (
        <span className="text-sm font-medium text-neutral-500">
          <LuCheckCheck />
        </span>
      );
    return <span></span>;
  }, [seen, sent]);
  return (
    <div
      style={{
        marginLeft: isMine ? "auto" : 0,
        flexDirection: isMine ? "row-reverse" : "row",
      }}
      className="flex w-fit max-w-sm items-start gap-1"
    >
      <img
        className="aspect-square w-8 basis-8 rounded-full"
        src={user.image}
        alt={user.name}
      />
      <div>
        <p
          className={`mt-5 rounded-xl p-2 ${
            isMine
              ? "rounded-tr-sm bg-brand-blue text-white"
              : "rounded-tl-sm bg-neutral-200"
          }`}
        >
          {text}
        </p>
        <div className="mt-1 flex justify-between">
          <span className="text-xs text-neutral-400">{dateText}</span>
          {status}
        </div>
      </div>
    </div>
  );
}

interface MessageProps {
  text: string;
  user: {
    image: string;
    name: string;
  };
  sendingDate: Date;
  isMine?: boolean;
  sent?: boolean;
  seen?: boolean;
}
