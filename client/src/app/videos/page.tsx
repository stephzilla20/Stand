'use client'


import Head from "next/head";
import AddVideoButton from "../components/AddVideoButton";
import GetVideosButton from "../components/GetVideosButton";
import DeleteAllButton from "../components/DeleteAllButton";

export default function Videos() {
  return (
    <div>
      <Head>         
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main>
        <AddVideoButton/>
        <GetVideosButton/>
        <DeleteAllButton/>
      </main>
    </div>
  );
}