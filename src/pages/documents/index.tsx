import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Documents = () => {
  const session = useSession();

  if (session.status === "loading") {
    return <div>loading</div>;
  }

  if (session.status === "unauthenticated") {
    return <div>Not authenticated</div>;
  }
  return (
    <>
      <div>Documents</div>
      <Link href="/documents/new">Create new document</Link>
    </>
  );
};

export default Documents;
