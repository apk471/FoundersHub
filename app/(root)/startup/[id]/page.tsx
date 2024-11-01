import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import React from "react";

export const experminetal_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  return (
    <>
      <h1 className="text-3xl">Startup {post?.title}</h1>
    </>
  );
};

export default page;
