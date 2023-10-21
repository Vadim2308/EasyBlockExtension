import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { SignInForm } from "@/features/auth";

export const SignInPage = () => {
  return (
    <UiFormPageLayout
      title="Sign in"
      header={<UiHeader />}
      form={<SignInForm />}
    />
  );
};
