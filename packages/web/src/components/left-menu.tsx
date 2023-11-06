import { icons } from "@/configs/icons";
import Image from "next/image";
import MiniCard from "./mini-card";
import { ProfileDetails } from "./Types";

export default function LeftMenu(props: ProfileDetails) {
  return (
    <main className="bg-white h-full flex justify-center pt-[100px] p-6 rounded-xl ">
      <div className="w-[307px] h-[631px] bg-no-repeat p-3 bg-outer-rect">
        <div className="h-[611px] w-[285px] bg-inner-rect pt-[53.5px] ">
          <div className="custom_scroll flex flex-col items-center flex-none overflow-x-hidden h-[90%] px-6 overflow-y-auto ">
            <Image src={icons.ellipse} width={96} height={96} alt="ellipse" />
            {props.firstName ? (
              <p className="mt-[25px] w-[250px] mb-[13px] font-semibold text-lg text-center">
                {props.firstName} {props.lastName}
              </p>
            ) : (
              <div className="bg-[#EEEEEE] rounded-[104px] h-[16px]  w-[160px] mt-[25px] mb-[13px] flex-shrink-0 "></div>
            )}
            {props.email ? (
              <p className="text-[#737373] text-sm text-center">
                {props.email}
              </p>
            ) : (
              <div className="bg-[#EEEEEE] rounded-[104px] h-[8px] w-[72px] flex-shrink-0 "></div>
            )}

            <div className="w-full mt-[56px] grid gap-5">
              {props.links?.map((item, index) => (
                <MiniCard
                  platform={item.platform}
                  link={item.link}
                  key={index}
                />
              ))}
              {props.links?.length! <= 5 &&
                new Array(5 - props.links?.length!)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-[#EEE] rounded-lg h-[44px]"
                    ></div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
