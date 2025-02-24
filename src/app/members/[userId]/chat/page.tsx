"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function ChatPage() {
  return (
    <Card className="w-full mt-10 h-[80vh]">
      <CardHeader className="text-2xl font-semibold text-secondary">Chat</CardHeader>
      <Divider />
      <CardBody>Chat goes here</CardBody>
    </Card>
  );
}
