import Message from "../components/chatRoom/Message";
import { useStore } from "../store";

export default function ChatRoom() {
  const { chatRoomId } = useStore();
  if (!chatRoomId) return <>This Chat room does not exist!</>;
  return (
    <div>
      <Message
        sendingDate={new Date()}
        text="teeaze aeaze aze a eaze azeae azeast teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast"
        user={{
          image: "https://avatars.dicebear.com/api/avataaars/male/Anass.svg",
          name: "anaes",
        }}
      />
      <Message
        isMine
        sendingDate={new Date()}
        text="teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast teeaz eazeazeazeaz eazea zeaze ast"
        user={{
          image: "https://avatars.dicebear.com/api/avataaars/male/Anass.svg",
          name: "Deyra",
        }}
        seen
      />
    </div>
  );
}
