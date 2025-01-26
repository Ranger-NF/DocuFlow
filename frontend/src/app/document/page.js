"use client";

import DocDetails from "@/app/document/docDetails";
import axios from "axios";
import useSWR from "swr";

import HashLoader from "react-spinners/HashLoader";

import { useSearchParams } from "next/navigation";

const fetcher = (serverUrl, doc) =>
  axios({
    method: "POST",
    url: serverUrl, // Append query parameter dynamically
    headers: {
      "Content-Type": "text/plain",
    },
    data: doc,
  }).then((res) => res.data);

const override = {
  positon: "absolute",
  top: "50%",
  left: "50%",
};

export default function document() {
  const searchParams = useSearchParams();
  const doc = searchParams.get("doc");

  const { data, error, isLoading } = useSWR(
    doc ? ["https://docuflow-seven.vercel.app/", doc] : null, // Ensure `doc` exists before fetching
    ([url, doc]) => fetcher(url, doc),
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <HashLoader
        className="absolute justify-center items-center top-1/2 left-1/2 h-screen w-screen"
        cssOverride={override}
        color="#22c55e"
        loading={true}
        size={100}
      />
    );
  return (
    <div>
      <DocDetails
        docName={doc}
        docsNeeded={data.docs}
        refLink={data.reference}
      />
    </div>
  );
}
