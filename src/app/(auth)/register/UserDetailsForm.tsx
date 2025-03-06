"use client";

import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";

export default function UserDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-4">
      <Input
        defaultValue=""
        label="Name"
        variant="bordered"
        autoComplete="name"
        {...register("name")}
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message as string}
      />
      <Input
        defaultValue=""
        label="Email"
        variant="bordered"
        type="email"
        autoComplete="email"
        {...register("email")}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message as string}
      />
      <Input
        defaultValue=""
        label="Password"
        variant="bordered"
        type="password"
        autoComplete="current-password"
        {...register("password")}
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message as string}
      />
    </div>
  );
}
