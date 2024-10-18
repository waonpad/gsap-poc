import type { Metadata } from "next";
import { ClientPage } from "./_page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Page() {
  return <ClientPage />;
}
