"use client";

import { Pagination } from "@heroui/pagination";
import clsx from "clsx";
import { useState } from "react";

export default function PaginationComponent() {
  const [active, setActive] = useState(3);

  return (
    <div className="border-t-2 w-full mt-5">
      <div className="flex justify-between items-center py-5">
        <div>Showing 1-10 of 23 results</div>
        <Pagination total={20} color="secondary" initialPage={1} variant="bordered" />
        <div className="flex gap-1 items-center">
          Page size:
          {[3, 6, 12].map((size) => (
            <div
              key={size}
              className={clsx("page-size-box", {
                "bg-secondary text-white hover:bg-secondary hover:text-white":
                  active === size,
              })}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
