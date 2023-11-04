import { icons } from "@/configs/icons";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center font-semibold w-full bg-white h-fit text-[#737373] p-4 rounded-xl">
      <div className="flex gap-1.5">
        <Image src={icons.logo} alt="logo" width={32} height={32} />
        <Image src={icons.devlinks} alt="logo" width={108} height={21} />
      </div>
      <div className="flex gap-4">
        <button className="flex gap-2 px-7 py-3 bg-[#EFEBFF] rounded-lg">
          <Image src={icons.link_selected} width={20} height={20} alt="link" />
          <p className="text-[#633CFF]">Links</p>
        </button>
        <button className="flex gap-2 px-7 py-3 rounded-lg">
          <Image src={icons.profile} width={20} height={20} alt="link" />
          <p className="">Profile Details</p>
        </button>
      </div>
      <button className="text-[#633CFF] border border-[#633CFF] px-7 py-3 rounded-lg">
        Preview
      </button>
    </div>
  );
}
