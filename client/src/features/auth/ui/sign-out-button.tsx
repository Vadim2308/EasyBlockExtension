import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model";

export function SignOutButton() {
  const { isLoading, singOut } = useSignOut();
  return (
    <UiButton
      variant="outlined"
      disabled={isLoading}
      onClick={() => singOut({})}
    >
      Sign Out
    </UiButton>
  );
}
