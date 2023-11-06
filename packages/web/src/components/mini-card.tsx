import { icons } from "@/configs/icons";
import Image from "next/image";
import Link from "next/link";

export default function MiniCard({
  platform,
  link,
}: {
  platform: string;
  link: string;
}) {
  const palette: any = {
    youtube: "#EE3939",
    github: "#1A1A1A",
    linkedin: "#2D68FF",
    facebook: "#2D68FF",
  };

  return (
    <Link
      href={"https://" + link}
      className={` p-4 rounded-lg flex justify-between items-center`}
      target="_blank"
      style={{ backgroundColor: palette[platform?.toLowerCase()] }}
    >
      <div className="flex items-center gap-2">
        <Image
          src={icons[platform + "_Solid"]}
          alt="platform"
          width={20}
          height={20}
        />
        <p className="text-white">{platform}</p>
      </div>
      <Image src={icons.right_arrow} alt="arrow" width={16} height={16} />
    </Link>
  );
}
