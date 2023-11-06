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
  __typename?: "LinkOutputDTO" | undefined;
  platform: string;
  link: string;
};

export default function HomePage() {
  const { data, loading, error } = useMeQuery();
  const { data: detailsData, loading: detailsLoading } = useGetDetailsQuery();
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

    // const array = [...detailsData?.getDetails.links!];
    // setLinks(array);
  }, [detailsData]);

  useEffect(() => {
    console.log(links);
  });

  if (loading) return;

  return (
    data?.Me && (
      <main className="p-6 bg-[#FAFAFA] min-h-screen flex flex-col gap-6">
        <Header />
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
