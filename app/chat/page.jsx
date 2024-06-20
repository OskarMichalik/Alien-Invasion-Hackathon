import ChatBox from "../components/chat/ChatBox";
import SpacetecChatDescription from "../components/chat/SpacetecChatDescription";

export default function ChatHome() {
  return (
    <div className="homeDiv">
      <SpacetecChatDescription />
      <ChatBox />
    </div>
  );
}
