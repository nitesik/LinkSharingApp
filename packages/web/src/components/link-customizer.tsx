import { icons } from "@/configs/icons";
import { Link } from "@/features/home-page/HomePage";
import Image from "next/image";
import { useState } from "react";

export default function LinkCustomizer({
  links,
  setLinks,
  buttonPressed,
  setButtonPressed,
}: {
  links: Link[];
  setLinks: (_: Link[]) => void;
  buttonPressed: boolean;
  setButtonPressed: (_: boolean) => void;
}) {
  const platforms = ["GitHub", "Youtube", "Facebook", "LinkedIn"];

  return (
    <main className="bg-white text-[#737373] h-full p-10">
      <h1 className="text-[#333333] text-3xl font-bold">
        Customize your links
      </h1>
      <p className="mt-2">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        onClick={() =>
          setLinks([
            ...links,
            {
              platform: links.length > 3 ? "GitHub" : platforms[links.length],
              link: "",
            },
          ])
        }
        className="border border-[#633CFF] rounded-lg py-3 w-full text-[#633CFF] font-semibold mt-10 mb-6 "
      >
        + Add new link
      </button>
      <div className="rounded-xl">
        {links.length === 0 ? (
          <div className="flex flex-col  p-5 bg-[#FAFAFA] justify-center items-center text-center min-h-[469px]">
            <div>
              <Image
                src={icons.linkCustomizeImage}
                alt="image"
                width={250}
                height={160}
              />
            </div>
            <h1 className="mt-10 mb-6 font-bold text-3xl text-[#333]">
              Let&apos;s get you started
            </h1>
            <p className="w-[488px]">
              Use the &quot;Add new link&quot; button to get started. Once you
              have more than one link, you can reorder and edit them. We&apos;re
              here to help you share your profiles with everyone!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 w-full">
            {links.map((item, index) => (
              <div key={index} className="bg-[#FAFAFA] rounded-xl p-5">
                <div className="flex justify-between">
                  <div className="flex gap-2 text-[#737373] font-bold ">
                    <Image src={icons.menu} alt="menu" width={20} />
                    <h3>Link #{index + 1}</h3>
                  </div>
                  <button
                    onClick={() =>
                      setLinks(
                        links.filter((item, indexItem) => indexItem !== index)
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-3">
                  <p>Platform</p>
                  <button className="custom_dropdown_parent w-full flex items-center relative justify-between mt-1 bg-white px-4 py-3 rounded-lg border border-[#D9D9D9]">
                    <div className="flex gap-3">
                      <Image
                        src={icons[item.platform]}
                        alt="platform"
                        width={16}
                        height={16}
                      />
                      <p>{item.platform}</p>
                    </div>
                    <Image
                      src={icons.dropdown}
                      alt="dropdown"
                      width={12}
                      height={6}
                    />
                    <div className="custom_dropdown absolute w-full -ml-4 mt-[265px] flex flex-col gap-6 p-5 border border-[#D9D9D9] rounded-lg bg-white">
                      {platforms.map((platformName, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex gap-2 hover:text-[#633CFF]"
                          onClick={() => {
                            const obj = links;
                            obj[index].platform = platformName;
                            setLinks(obj);
                            setButtonPressed(!buttonPressed);
                          }}
                        >
                          <Image
                            src={icons[platformName]}
                            alt="image"
                            width={16}
                            height={16}
                          />
                          <p>{platformName}</p>
                        </div>
                      ))}
                    </div>
                  </button>
                </div>
                <div className="mt-3">
                  <label htmlFor={`id${index}`}>Link</label>
                  <div className="flex items-center justify-between mt-1 bg-white px-4 py-3 rounded-lg border border-[#D9D9D9]">
                    <div className="flex gap-3 flex-1">
                      <Image
                        src={icons.link}
                        alt="link"
                        width={16}
                        height={16}
                      />
                      <input
                        className="flex-1 outline-none"
                        id={`id${index}`}
                        placeholder={`e.g. https://www.${item.platform.toLowerCase()}.com/johnappleseed`}
                        onChange={(e) => {
                          const obj = links;
                          obj[index].link = e.target.value;
                          setButtonPressed(!buttonPressed);
                          setLinks(obj);
                        }}
                        value={links[index].link || ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
