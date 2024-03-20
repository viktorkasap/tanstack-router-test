export const InputSubmit = ({ isPending }: { isPending: boolean }) => {
  return (
    <div>
      <input
        type="submit"
        id="submit"
        name="submit"
        disabled={isPending}
        value={isPending ? "Loading..." : "Sing-In"}
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-600 cursor-pointer"
      />
    </div>
  );
};
