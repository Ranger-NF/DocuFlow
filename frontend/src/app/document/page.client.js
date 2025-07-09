"use client";

import DocDetails from "./docDetails";
import axios from "axios";
import useSWR from "swr";
import HashLoader from "react-spinners/HashLoader";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const fetcher = (serverUrl, doc) =>
  axios({
    method: "POST",
    url: serverUrl,
    headers: { "Content-Type": "text/plain" },
    data: doc,
  }).then((res) => res.data);

const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

function LoadingSpinner() {
  return (
    <HashLoader
      className="absolute justify-center items-center top-1/2 left-1/2 h-screen w-screen"
      cssOverride={override}
      color="#22c55e"
      loading={true}
      size={100}
    />
  );
}

function DocumentDetails() {
  const searchParams = useSearchParams();
  const doc = searchParams.get("doc");

  const { data, error, isLoading } = useSWR(
    doc ? ["https://docuflow-seven.vercel.app/", doc] : null,
    ([url, doc]) => fetcher(url, doc),
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <LoadingSpinner />;

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

export default function DocumentPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DocumentDetails />
    </Suspense>
  );
}
