import { ChangeEvent } from "react";

export const InputPassword = ({
  password,
  onChange,
  isPending,
}: {
  password: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
      >
        Password Demo: <code>0lelplR</code>
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm dark:text-gray-300 dark:text-gray-300">
            &
          </span>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300"
          placeholder="JoHnSn0_w!"
          value={password}
          onChange={onChange}
          disabled={isPending}
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};
