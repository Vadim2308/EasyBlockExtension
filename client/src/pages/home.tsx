import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiLogo } from "@/shared/ui/ui-logo";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session/queries";

export default function HomePage() {
  const { data } = useSessionQuery();
  return (
    <main className={`min-h-screen`}>
      <UiHeader
        right={
          <div>
            {data?.email}
            <SignOutButton />
          </div>
        }
      />
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Hey</UiButton>
      <UiButton disabled variant="outlined">
        Hey
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: "Enter name" }}
      />
      <UiTextField error="error" inputProps={{ placeholder: "Enter name" }} />
      <UiSelectField
        selectProps={{ placeholder: "Enter name" }}
        options={[{ label: "label", value: "1" }]}
      />
      <UiLink href="/data">Some link</UiLink>
      <UiSpinner className="text-teal-600 w-20 h-20" />
      <UiLogo />
    </main>
  );
}
