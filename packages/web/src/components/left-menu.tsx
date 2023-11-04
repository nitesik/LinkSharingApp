import { icons } from "@/configs/icons";
import Image from "next/image";

export default function LeftMenu() {
  return (
    <main className="bg-white h-full flex justify-center pt-[100px] p-6 rounded-xl ">
      <div className="w-[307px] h-[631px] bg-no-repeat p-3 bg-outer-rect">
        <div className="h-[611px] w-[285px] bg-inner-rect pt-[53.5px] ">
          <div className="custom_scroll flex flex-col items-center  h-[90%] px-6 overflow-y-auto ">
            <Image src={icons.ellipse} width={96} height={96} alt="ellipse" />
            <div className="bg-[#EEEEEE] rounded-[104px] h-[16px] w-[160px] mt-[25px] mb-[13px] flex-shrink-0 "></div>
            <div className="bg-[#EEEEEE] rounded-[104px] h-[8px] w-[72px] flex-shrink-0 "></div>

            <div className="w-full mt-[56px] grid gap-5">
              {new Array(10).fill(0).map((val, index) => (
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
