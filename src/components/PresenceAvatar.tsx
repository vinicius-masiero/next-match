import usePresenceStore from "@/hooks/usePresenceStore";
import { Badge } from "@heroui/badge";
import { Avatar } from "@heroui/avatar";

type Props = {
  userId?: string;
  src?: string | null;
};

export default function PresenceAvatar({ userId, src }: Props) {
  const members = usePresenceStore((state) => state.members);

  const isOnline = userId && members.indexOf(userId) !== -1;

  return (
    <Badge content="" color="success" shape="circle" isInvisible={!isOnline}>
      <Avatar src={src || "/images/user.png"} alt="User avatar" />
    </Badge>
  );
}
