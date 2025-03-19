import { getMessagesByContainer } from "../actions/messageActions";
import MessageSidebar from "./MessageSidebar";
import MessageTable from "./MessageTable";

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: Promise<{ container: string }>;
}) {
  const { container } = await searchParams;
  const { messages, nextCursor } = await getMessagesByContainer(container);

  return (
    <div className="grid grid-cols-12 gap-5 p-5 md:p-0 h-[80vh] mt-10">
      <div className="col-span-12 md:col-span-2">
        <MessageSidebar />
      </div>
      <div className="col-span-12 md:col-span-10">
        <MessageTable initialMessages={messages} nextCursor={nextCursor} />
      </div>
    </div>
  );
}
