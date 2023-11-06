import { icons } from "@/configs/icons";
import Image from "next/image";
import { ProfileDetails } from "./Types";

export default function ProfileCustomizer(props: ProfileDetails) {
  return (
    <main className="bg-white text-[#737373] p-10">
      <h1 className="text-[#333333] text-3xl font-bold">Profile Details</h1>
      <p className="mt-2">
        Add your details to create a personal touch to your profile.
      </p>
      <div className="bg-[#FAFAFA] rounded-xl flex justify-between p-5 mt-10 mb-6 items-center ">
        <p>Profile picture</p>
        <div className="flex gap-6 items-center">
          <div className="bg-[#EFEBFF] rounded-xl flex flex-col items-center justify-center w-[193px] h-[193px] ">
            <Image
              src={icons.image}
              alt="upload image"
              width={40}
              height={40}
            />
            <p className="text-[#633CFF] font-semibold">+ Upload Image</p>
          </div>
          <p className="w-[315px]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFA] rounded-xl flex flex-col gap-3 p-5 mt-10 mb-6 ">
        <div className="flex gap-4 items-center w-full">
          <label className="w-[240px]" htmlFor="firstName">
            First Name*
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="e.g. John"
            className="bg-white flex-1 px-4 py-3 border boder-[#D9D9D9] rounded-lg "
            onChange={(e) => props.setFirstName(e.target.value)}
            value={props.firstName}
          />
        </div>
        <div className="flex gap-4 items-center w-full">
          <label className="w-[240px]" htmlFor="lastName">
            Last Name*
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="e.g. Appleseed"
            className="bg-white flex-1 px-4 py-3 border boder-[#D9D9D9] rounded-lg "
            onChange={(e) => props.setLastName(e.target.value)}
            value={props.lastName}
          />
        </div>
        <div className="flex gap-4 items-center w-full">
          <label className="w-[240px]">Email</label>
          <input
            readOnly
            type="text"
            placeholder="e.g. email@example.com"
            className="flex-1 px-4 py-3 border boder-[#D9D9D9] rounded-lg bg-[#EEEEEE] "
            onChange={(e) => props.setEmail(e.target.value)}
            value={props.email}
          />
        </div>
      </div>
    </main>
  );
}
