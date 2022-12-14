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
    <div className="mx-auto max-w-screen-xl">
      <div>My Documents</div>
      <div className="my-2" />
      <div className="flex flex-wrap gap-4">
        <Link href="/documents/editor" passHref>
          <button className="btn h-52 w-36">Create new README </button>
        </Link>
      </div>
    </div>
  );
};

export default Documents;
