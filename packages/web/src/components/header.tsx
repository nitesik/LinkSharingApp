import { icons } from "@/configs/icons";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Header({ userId }: { userId: string }) {
  const router = useRouter();
  const url = useSearchParams().get("v");

  return (
    <div className="flex justify-between items-center font-semibold w-full bg-white h-fit text-[#737373] p-4 rounded-xl">
      <div className="flex gap-1.5">
        <Image src={icons.logo} alt="logo" width={32} height={32} />
        <Image
          src={icons.devlinks}
          alt="logo"
          width={108}
          height={21}
          className="hidden md:inline"
        />
      </div>
      <div className="flex md:gap-4">
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
          <p className="hidden md:inline">Links</p>
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
          <p className="hidden md:inline">Profile Details</p>
        </button>
      </div>
      <Link
        href={`/${userId}`}
        className="text-[#633CFF] border border-[#633CFF] px-4 md:px-7 py-3 rounded-lg"
      >
        <p className="hidden md:inline">Preview</p>
        <Image
          src={icons.preview}
          alt="preview"
          height={20}
          width={20}
          className="md:hidden"
        />
      </Link>
    </div>
  );
}
