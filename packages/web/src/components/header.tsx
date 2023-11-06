import { icons } from "@/configs/icons";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const url = useSearchParams().get("v");

  return (
    <div className="flex justify-between items-center font-semibold w-full bg-white h-fit text-[#737373] p-4 rounded-xl">
      <div className="flex gap-1.5">
        <Image src={icons.logo} alt="logo" width={32} height={32} />
        <Image src={icons.devlinks} alt="logo" width={108} height={21} />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => router.push(router.basePath + "?v=links")}
          className={`flex gap-2 px-7 py-3  rounded-lg ${
            url !== "details" ? "text-[#633CFF] bg-[#EFEBFF]" : ""
          } `}
        >
          <Image
            src={url !== "details" ? icons.link_selected : icons.link}
            width={20}
            height={20}
            alt="link"
          />
          <p>Links</p>
        </button>
        <button
          onClick={() => router.push(router.basePath + "?v=details")}
          className={`flex gap-2 px-7 py-3  rounded-lg ${
            url === "details" ? "text-[#633CFF] bg-[#EFEBFF]" : ""
          } `}
        >
          <Image
            src={url === "details" ? icons.profile_selected : icons.profile}
            width={20}
            height={20}
            alt="link"
          />
          <p>Profile Details</p>
        </button>
      </div>
      <button className="text-[#633CFF] border border-[#633CFF] px-7 py-3 rounded-lg">
        Preview
      </button>
    </div>
  );
}
