export function SignIn() {
  return <p>Sign In</p>;
}

/*
const signInRequest = ({ email, password, rememberMe }: SignInProps) =>
  apiRequest({ url: API.AUTH.SIGN_IN, data: { email, password, remember: rememberMe } });

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const { setCurrentUserId } = useUserLocalStorage();

  return useMutation<UserPropsResponse, ErrorType, SignInProps>({
    networkMode: 'offlineFirst',
    mutationFn: signInRequest,
    onSuccess: (user) => {
      setCurrentUserId(user.data.id);
      queryClient.setQueryData([QUERY_KEY.USER], user);
    },
  });
};
 */
