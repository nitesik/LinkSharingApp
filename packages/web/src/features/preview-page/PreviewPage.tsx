import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useGetUserDetailsQuery, useMeQuery } from "@/generated/graphql";
import Link from "next/link";
import { useEffect } from "react";
import MiniCard from "@/components/mini-card";
import Head from "next/head";

export const revalidate = 0;

export default function PreviewPage() {
  const router = useRouter();

  const path = usePathname();

  const { data: MeData } = useMeQuery();

  const { userId } = router.query;

  const { data, loading, error, refetch } = useGetUserDetailsQuery({
    variables: {
      id: userId as string,
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return;

  return (
    <main className="flex flex-col items-center ">
      <Head>
        <title>Preview {data?.getUserDetails.firstName || ""}</title>
      </Head>
      <div className="md:bg-[#633CFF] md:h-[357px] rounded-b-[32px] w-full md:p-6 ">
        {MeData?.Me && MeData?.Me.email === data?.getUserDetails.email && (
          <div className="bg-white rounded-lg px-6 py-4 flex justify-between">
            <Link
              href={"/"}
              className="text-[#633CFF] border px-7 py-3 border-[#633CFF] rounded-lg font-semibold"
            >
              Back to Editor
            </Link>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  window.location.origin + router.asPath
                )
              }
              className="border px-7 py-3 border-[#633CFF] bg-[#633CFF] rounded-lg text-white font-semibold"
            >
              Share Link
            </button>
          </div>
        )}
      </div>
      <div className="w-[337px] md:w-[349px] h-fit bg-white profile_box rounded-3xl md:-translate-y-40 mt-[60px] md:mt-0 px-[56px] md:py-[48px] flex flex-col gap-[56px] ">
        <div className="flex flex-col items-center">
          <div className="w-[96px] h-[96px] bg-[#EEE] rounded-full"></div>
          <h3 className="mt-6 mb-2 text-lg font-semibold">
            {data?.getUserDetails.firstName} {data?.getUserDetails.lastName}
          </h3>
          <p className="text-[#737373] text-sm ">
            {data?.getUserDetails.email}
          </p>
        </div>
        <div className="grid gap-4">
          {data?.getUserDetails.links?.map((item, index) => (
            <MiniCard platform={item.platform} link={item.link} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
