import { getMemberByUserId } from "@/app/actions/memberActions";
import { notFound } from "next/navigation";
import MemberProfileCard from "./MemberProfileCard";

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  return <MemberProfileCard member={member} />;
}
