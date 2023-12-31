import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useResetSession } from "@/entities/session/queries";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants";

export function useSignOut() {
  const resetSession = useResetSession();
  const router = useRouter();

  const singOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      void router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    isLoading: singOutMutation.isPending,
    singOut: singOutMutation.mutate,
  };
}
