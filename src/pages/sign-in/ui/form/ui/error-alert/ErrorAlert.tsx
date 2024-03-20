import { ApiError } from "@shared/types";

export const ErrorAlert = ({ error }: { error: ApiError | null }) => {
  if (!error) {
    return null;
  }

  return (
    <div
      className="p-4 mb-5 text-sm text-red-800 dark:text-red-900 rounded-lg bg-red-50 dark:text-red-400 dark:bg-red-200"
      role="alert"
    >
      <span className="font-medium">Error:</span>{" "}
      {error?.response?.data.message}
    </div>
  );
};
