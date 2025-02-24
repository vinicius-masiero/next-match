"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Member } from "@prisma/client";

export default function MemberProfileCard({ member }: { member: Member }) {
  return (
    <Card className="w-full mt-10 h-[80vh]">
      <CardHeader className="text-2xl font-semibold text-secondary">Profile</CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </Card>
  );
}
