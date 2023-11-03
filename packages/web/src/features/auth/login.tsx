import { icons } from "@/configs/icons";
import Image from "next/image";
import Link from "next/link";

export default function LoginComponent() {
  return (
    <div className="h-screen bg-[#FAFAFA] text-[#737373] grid place-content-center">
      <div className="flex flex-col items-center gap-[51px] text-base">
        <div className="flex gap-2">
          <Image src={icons.logo} alt="logo" width={40} height={40} />
          <Image src={icons.devlinks} alt="devlinks" width={126} />
        </div>
        <div className="grid gap-10 p-10 bg-white rounded-lg w-[476px]">
          <div>
            <h1 className="text-[32px] leading-[48px] text-black font-bold">
              Login
            </h1>
            <h3 className="mt-2">
              Add your details below to get back into the app
            </h3>
          </div>
          <div className="grid gap-6">
            <div className="">
              <label className="text-xs text-[#333]" htmlFor="">
                Email address
              </label>
              <div className="flex gap-3 items-center border px-4 py-3 rounded-lg mt-1">
                <Image
                  src={icons.emailIcon}
                  alt="email"
                  width={16}
                  height={16}
                />
                <input
                  className="outline-none"
                  type="text"
                  placeholder="e.g. alex@email.com"
                />
              </div>
            </div>
            <div className="">
              <label className="text-xs text-[#333]" htmlFor="">
                Create password
              </label>
              <div className="flex gap-3 items-center border px-4 py-3 rounded-lg mt-1">
                <Image src={icons.lock} alt="lock" width={16} height={16} />
                <input
                  className="outline-none"
                  type="password"
                  placeholder="At least 8 characters"
                />
              </div>
            </div>

            <button className="bg-[#633CFF] py-3 rounded-lg text-white font-bold">
              Login
            </button>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#633CFF]">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
