import { getMemberPhotosByUserId } from "@/app/actions/memberActions";
import MemberPhotosCard from "./MemberPhotosCard";

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const photos = await getMemberPhotosByUserId(userId);

  return <MemberPhotosCard photos={photos} />;
}
