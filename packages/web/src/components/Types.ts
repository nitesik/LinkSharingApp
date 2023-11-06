import { Link } from "@/features/home-page/HomePage";

export type ProfileDetails = {
  firstName: string;
  lastName: string;
  email: string;
  links?: Link[];
  setFirstName: (_: string) => void;
  setLastName: (_: string) => void;
  setEmail: (_: string) => void;
};
