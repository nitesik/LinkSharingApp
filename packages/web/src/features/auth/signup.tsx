import { icons } from "@/configs/icons";
import { useSignUpMutation } from "@/generated/graphql";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [signUpMutation, { data, loading, error: signupError }] =
    useSignUpMutation();

  const router = useRouter();

  function formHandler(event: React.FormEvent) {
    event.preventDefault();

    signUpMutation({
      variables: {
        userAuthInput: {
          email,
          password,
        },
      },
    })
      .then(() => router.push("/"))
      .catch((e) => console.error(e));
  }

  return (
    <div className="h-screen md:bg-[#FAFAFA] text-[#737373] p-8 md:p-0 md:grid place-content-center">
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="flex flex-col md:items-center gap-[51px] text-base">
        <div className="flex gap-2">
          <Image src={icons.logo} alt="logo" width={40} height={40} />
          <Image src={icons.devlinks} alt="devlinks" width={126} />
        </div>
        <form
          onSubmit={formHandler}
          className="grid gap-10 md:p-10 bg-white rounded-lg md:w-[476px]"
        >
          <div>
            <h1 className="text-[32px] leading-[48px] text-black font-bold">
              Create account
            </h1>
            <h3 className="mt-2">
              Let&apos;s get you started sharing your links!
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
                  required
                  className="outline-none"
                  type="text"
                  placeholder="e.g. alex@email.com"
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
                  required
                  className="outline-none"
                  type="password"
                  placeholder="At least 8 characters"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <label className="text-xs text-[#333]" htmlFor="">
                Confirm password
              </label>
              <div className="flex gap-3 items-center border px-4 py-3 rounded-lg mt-1">
                <Image src={icons.lock} alt="lock" width={16} height={16} />
                <input
                  required
                  className="outline-none"
                  type="password"
                  placeholder="At least 8 characters"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
            </div>
            <p>Password must contain at least 8 characters</p>
            {signupError && (
              <p className="text-red-500 w-full text-center">
                {signupError.message}
              </p>
            )}
            <button
              disabled={password !== passwordConfirm}
              type="submit"
              className="bg-[#633CFF] py-3 rounded-lg text-white font-bold flex justify-center"
            >
              {loading ? (
                <Image
                  src={icons.loader}
                  alt="loading"
                  height={25}
                  width={25}
                  className="animate-spin invert"
                />
              ) : (
                "Create new account"
              )}
            </button>
            <div className="text-center gap-2 justify-center md:flex">
              <p>Already have an account? </p>
              <Link href="/login" className="text-[#633CFF]">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
