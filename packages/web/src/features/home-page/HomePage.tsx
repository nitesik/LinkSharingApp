import { useMeQuery } from "@/generated/graphql";
import Header from "@/components/header";
import LeftMenu from "@/components/left-menu";
import LinkCustomizer from "@/components/link-customizer";
import { useEffect, useState } from "react";

export type Link = {
  platform: string;
  link: string;
};

export default function HomePage() {
  const { data, loading, error } = useMeQuery();

  const [links, setLinks] = useState<Link[]>([]);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    console.log(links);
  });

  return (
    <main className="p-6 bg-[#FAFAFA] min-h-screen flex flex-col gap-6">
      <Header />
      <div className="flex gap-6 w-full h-full">
        <div className="w-[40%]">
          <LeftMenu />
        </div>
        <div className="flex flex-1 flex-col gap-1 rounded-xl overflow-hidden">
          <LinkCustomizer
            links={links}
            buttonPressed={buttonPressed}
            setButtonPressed={setButtonPressed}
            setLinks={setLinks}
          />
          <div className="flex justify-end px-10 py-6 bg-white">
            <button className="bg-[#633CFF] rounded-lg w-fit text-white font-semibold px-8 py-3 ">
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
