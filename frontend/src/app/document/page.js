"use client";

import DocDetails from "@/app/document/docDetails";
import axios from "axios";
import useSWR from "swr";

import { useSearchParams } from "next/navigation";

const fetcher = (url, doc) =>
  axios.get(url, { params: { doc } }).then((res) => res.data);

export default function document() {
  const searchParams = useSearchParams();
  const doc = searchParams.get("doc"); // Retrieve the "doc" query parameter

  console.log(doc);

  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/",
    (url, doc) => fetcher(url, doc),
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
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
