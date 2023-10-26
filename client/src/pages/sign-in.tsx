import { SignInForm } from "@/features/auth";
import { UiFormPageLayout, UiHeader } from "@/shared/ui";

export const SignInPage = () => {
  return (
    <UiFormPageLayout
      title="Sign in"
      header={<UiHeader />}
      form={<SignInForm />}
    />
  );
};
