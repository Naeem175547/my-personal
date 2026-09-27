import { signIn } from "@/graphql/mutation/auth";
import { useMutation } from "@apollo/client/react";

export const useSignIn = () => {
  const [mutate, { error, loading }] = useMutation(signIn, {
    onCompleted: (data) => {
      console.log("Successfully signed in", data);
    },

    onError: (error) => {
      console.error("Failed to sign in", error);
    },
  });
  return {
    signUpMutate: mutate,
    error,
    loading,
  };
};
