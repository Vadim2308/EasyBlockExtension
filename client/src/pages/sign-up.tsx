import { SignUpForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui";
import { UiHeader } from "@/shared/ui/ui-header";

export const SignUpPage = () => {
  return (
    <UiFormPageLayout
      title="Sign up"
      header={<UiHeader />}
      form={<SignUpForm />}
    />
  );
};
