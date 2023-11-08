import { icons } from "@/configs/icons";
import { useLoginMutation } from "@/generated/graphql";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginComponent() {
  const [loginMutation, { data, loading, error: loginError }] =
    useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    try {
      loginMutation({
        variables: {
          userAuthInput: {
            email,
            password,
          },
        },
      }).then(() => router.push("/"));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen bg-[#FAFAFA] text-[#737373] grid place-content-center">
      <div className="flex flex-col items-center gap-[51px] text-base">
        <div className="flex gap-2">
          <Image src={icons.logo} alt="logo" width={40} height={40} />
          <Image src={icons.devlinks} alt="devlinks" width={126} />
        </div>
        <form
          onSubmit={submitHandler}
          className="grid gap-10 p-10 bg-white rounded-lg w-[476px]"
        >
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
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {loginError && (
              <p className="text-red-500 w-full text-center">
                {loginError.message}
              </p>
            )}
            <button className="bg-[#633CFF] py-3 rounded-lg flex justify-center text-white font-bold">
              {loading ? (
                <Image
                  src={icons.loader}
                  alt="loading"
                  height={25}
                  width={25}
                  className="animate-spin invert"
                />
              ) : (
                "Login"
              )}
            </button>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#633CFF]">
                Create account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
