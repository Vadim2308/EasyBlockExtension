import { UiHeader } from "@/shared/ui/ui-header";
import { useSessionQuery } from "@/entities/session/queries";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { Profile } from "@/widgets/profile";

export default function HomePage() {
  const { data } = useSessionQuery();
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader right={<Profile />} />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className="pt-10 px-5">
          <h1 className="text-2xl mb-8">Block list</h1>
          {/*<AddBlockItemForm />*/}
          {/*<BlockList className="mt-3" />*/}
        </main>
      </div>
    </div>
  );
}
