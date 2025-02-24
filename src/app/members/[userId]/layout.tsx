import { getMemberByUserId } from "@/app/actions/memberActions";
import MemberSidebar from "../MemberSidebar";
import { notFound } from "next/navigation";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const member = await getMemberByUserId(userId);
  if (!member) return notFound();

  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh]">
      <div className="col-span-3">
        <MemberSidebar member={member} />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}
