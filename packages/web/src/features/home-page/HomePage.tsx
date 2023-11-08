import {
  useAddDetailsMutation,
  useGetDetailsQuery,
  useMeQuery,
} from "@/generated/graphql";
import Header from "@/components/header";
import LeftMenu from "@/components/left-menu";
import LinkCustomizer from "@/components/link-customizer";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProfileCustomizer from "@/components/profile-customizer";
import { useRouter } from "next/router";
import _ from "lodash";

export type Link = {
  platform: string;
  link: string;
};

export default function HomePage() {
  const { data, loading, error } = useMeQuery();
  const {
    data: detailsData,
    loading: detailsLoading,
    refetch,
  } = useGetDetailsQuery();
  const [addDetailsMutation] = useAddDetailsMutation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [links, setLinks] = useState<Link[]>([]);
  const [buttonPressed, setButtonPressed] = useState(false);

  const url = useSearchParams().get("v");
  const router = useRouter();

  if (!loading) {
    if (!data?.Me) router.push("/login");
  }

  useEffect(() => {
    setFirstName(detailsData?.getDetails.firstName || "");
    setLastName(detailsData?.getDetails.lastName || "");
    setEmail(data?.Me.email || "");
    setLinks(_.cloneDeep(detailsData?.getDetails.links) || []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsData]);

  useEffect(() => {
    refetch();
  }, []);

  if (loading || detailsLoading) return;

  if (!data) return <div>Error lol</div>;

  return (
    data && (
      <main className="p-6 bg-[#FAFAFA] min-h-screen flex flex-col gap-6">
        <Header userId={data.Me.sub} />
        <div className="flex gap-6 w-full h-full">
          <div className="w-[40%]">
            <LeftMenu
              links={links}
              firstName={firstName}
              lastName={lastName}
              email={email}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
            />
          </div>
          <div className="flex flex-1 flex-col gap-1 rounded-xl overflow-hidden">
            {url === "details" ? (
              <ProfileCustomizer
                firstName={firstName}
                lastName={lastName}
                email={email}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
              />
            ) : (
              <LinkCustomizer
                links={links}
                buttonPressed={buttonPressed}
                setButtonPressed={setButtonPressed}
                setLinks={setLinks}
              />
            )}
            <div className="flex justify-end px-10 py-6 bg-white">
              <button
                onClick={(e) => {
                  addDetailsMutation({
                    variables: {
                      userDetailsInput: {
                        firstName,
                        lastName,
                        links,
                      },
                    },
                  });
                }}
                className="bg-[#633CFF] rounded-lg w-fit text-white font-semibold px-8 py-3 "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  );
}
