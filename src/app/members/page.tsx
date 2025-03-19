import PaginationComponent from "@/components/PaginationComponent";
import { fetchCurrentUserLikeIds } from "../actions/likeActions";
import { getMembers } from "../actions/memberActions";
import MemberCard from "./MemberCard";
import { GetMemberParams } from "@/types";
import EmptyState from "@/components/EmptyState";

export default async function MembersPage({
  searchParams,
}: {
  searchParams: Promise<GetMemberParams>;
}) {
  const userFilters = await searchParams;
  const { items: members, totalCount } = await getMembers(userFilters);
  const likeIds = await fetchCurrentUserLikeIds();

  return (
    <>
      {!members || members.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 p-2 md:p-0">
            {members &&
              members.map((member) => (
                <MemberCard key={member.id} member={member} likeIds={likeIds} />
              ))}
          </div>
          <PaginationComponent totalCount={totalCount} />
        </>
      )}
    </>
  );
}
