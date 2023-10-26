import { ROUTES } from "@/shared/constants";
import { UiButton, UiLink, UiTextField } from "@/shared/ui";
import { useSignInForm } from "../model";

export function SignInForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton disabled={isLoading} variant="primary">
        Sign In
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_UP}>
        Sign Up
      </UiLink>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}
