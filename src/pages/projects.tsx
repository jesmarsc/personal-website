import { Personal, SDF } from "@/features/projects";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SDF className="max-w-body mx-auto my-10" />
      <Personal className="max-w-body mx-auto my-32 sm:my-60" />
    </main>
  );
}