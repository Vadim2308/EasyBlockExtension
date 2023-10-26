import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";
import { useSessionQuery } from "@/entities/session/queries";
import { ROUTES } from "@/shared/constants";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isError, isLoading } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      void router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
