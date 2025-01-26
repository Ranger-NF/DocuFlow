"use client";

import DocDetails from "@/app/document/docDetails";
import axios from "axios";
import useSWR from "swr";

import HashLoader from "react-spinners/HashLoader";

import { useSearchParams } from "next/navigation";

const fetcher = (url, doc) =>
  axios.get(url, { params: { doc } }).then((res) => res.data);

const override = {
  positon: "absolute",
  top: "50%",
  left: "50%",
};

export default function document() {
  const searchParams = useSearchParams();
  const doc = searchParams.get("doc");

  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/",
    (url, doc) => fetcher(url, doc),
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
