import { ChangeEvent } from "react";

export const InputUserName = ({
  username,
  onChange,
  isPending,
}: {
  username: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor="username"
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
      >
        Login Demo: <code>kminchelle</code>
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
          <span className="text-gray-500 sm:text-sm dark:text-gray-300">⌘</span>
        </div>
        <input
          type="text"
          name="username"
          id="username"
          className="block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300"
          placeholder="johnsnow1"
          value={username}
          onChange={onChange}
          disabled={isPending}
          autoComplete="username"
        />
      </div>
    </div>
  );
};
