import { differenceInYears } from "date-fns";
import { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { ZodIssue } from "zod";

export function calculateAge(dateOfBirth: Date) {
  return differenceInYears(new Date(), dateOfBirth);
}

export function handleFormServerErrors<TFieldValues extends FieldValues>(
  errorResponse: { error: string | ZodIssue[] },
  setError: UseFormSetError<TFieldValues>
) {
  if (Array.isArray(errorResponse.error)) {
    errorResponse.error.forEach((error) => {
      const fieldName = error.path.join(".") as Path<TFieldValues>;
      setError(fieldName, { message: error.message });
    });
  } else {
    setError("root.serverError", { message: errorResponse.error });
  }
}

export function transformImageUrl(imageUrl?: string | null) {
  if (!imageUrl) return null;

  if (!imageUrl.includes("cloudinary")) return imageUrl;

  const uploadIndex = imageUrl.indexOf("/upload/") + "/upload/".length;

  const transformation = "c_fill,w_300,h_300,g_faces/";

  return `${imageUrl.slice(0, uploadIndex)}${transformation}${imageUrl.slice(
    uploadIndex
  )}`;
}
