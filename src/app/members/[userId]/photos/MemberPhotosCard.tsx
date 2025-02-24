"use client";

import { Card, CardBody, CardHeader, Divider, Image } from "@heroui/react";
import { Photo } from "@prisma/client";

export default function MemberPhotosCard({ photos }: { photos: Photo[] | null }) {
  return (
    <Card className="w-full mt-10 h-[80vh]">
      <CardHeader className="text-2xl font-semibold text-secondary">Photos</CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos.map((photo) => (
              <div key={photo.id}>
                <Image
                  width={300}
                  src={photo.url}
                  alt="Image of member"
                  className="object-cover aspect-square"
                />
              </div>
            ))}
        </div>
      </CardBody>
    </Card>
  );
}
