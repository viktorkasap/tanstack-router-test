import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "@entities/user";
import { ApiError, SignInProps } from "@shared/types";
import { fetchSignInUser } from "./fetch-sign-in-user";

export const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation<User, ApiError, SignInProps>({
    networkMode: "offlineFirst",
    mutationFn: fetchSignInUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.token);
    },
    onError: (error: ApiError) => {
      return error.response?.data.message;
    },
  });
};
