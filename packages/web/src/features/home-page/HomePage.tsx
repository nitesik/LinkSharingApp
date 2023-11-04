import { useMeQuery } from "@/generated/graphql";
import Header from "@/components/header";
import LeftMenu from "@/components/left-menu";

export default function HomePage() {
  const { data, loading, error } = useMeQuery();

  return (
    <main className="p-6 bg-[#FAFAFA] h-screen flex flex-col gap-6">
      <Header />
      <div className="flex gap-6 w-full h-full">
        <div className="w-[40%]">
          <LeftMenu />
        </div>
        <div className="flex-1 bg-black">hello</div>
      </div>
    </main>
  );
}
