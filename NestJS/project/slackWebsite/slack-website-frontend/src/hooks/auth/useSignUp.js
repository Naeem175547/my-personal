import { signUp } from "@/graphql/mutation/auth";
import { useMutation } from "@apollo/client/react";

export const useSignUp = () => {
  const [mutate, { data, error, loading }] = useMutation(signUp, {
    onCompleted: (data) => {
      console.log("successfully signUp", data);
    },
    onError: (error) => {
      console.log("failed to signUp", error);
    },
  });
  return {
    signUpMutation: mutate,
    data,
    error,
    loading,
  };
};
