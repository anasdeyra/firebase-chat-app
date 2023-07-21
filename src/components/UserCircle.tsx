export default function UserCircle({
  image,
  name,
  isOnline,
  size = 48,
}: UserCircleProps & { size?: number }) {
  return (
    <div
      style={{ width: size }}
      className={`relative aspect-square shrink-0 rounded-full bg-neutral-50`}
    >
      {isOnline && (
        <span className="absolute right-1 top-[2px] z-[1] aspect-square w-2 rounded-full bg-green-500" />
      )}
      <img
        src={image}
        alt={name + " profile picture"}
        className="h-full w-full rounded-full"
      />
    </div>
  );
}

export interface UserCircleProps {
  name: string;
  image: string;
  isOnline: boolean;
}
