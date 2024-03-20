import { useForm } from "./hooks";
import { ErrorAlert, InputPassword, InputSubmit, InputUserName } from "./ui";

export const Form = () => {
  const {
    username,
    password,
    handleSubmit,
    handleInput,
    isPending,
    isError,
    error,
  } = useForm();

  return (
    <form className="py-5" onSubmit={handleSubmit}>
      {isError && <ErrorAlert error={error} />}

      <div className="max-w-lg mx-auto flex flex-col gap-5">
        <InputUserName
          username={username}
          onChange={handleInput}
          isPending={isPending}
        />
        <InputPassword
          password={password}
          onChange={handleInput}
          isPending={isPending}
        />
        <InputSubmit isPending={isPending} />
      </div>
    </form>
  );
};
