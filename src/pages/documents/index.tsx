import Link from "next/link";
import React from "react";

const Documents = () => {
  return (
    <>
      <div>Documents</div>
      <Link href="/documents/create">Create new document</Link>
    </>
  );
};

export default Documents;
